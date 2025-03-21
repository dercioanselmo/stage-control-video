import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import Image from 'next/image';
import CustomButton from './CustomButton';

const colors = {
  background: '#0F0F0F',
  textPrimary: '#fff',
  textSecondary: '#ccc',
};

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: colors.background,
        height: '70px', // Fixed height
      }}
    >
      <Toolbar
        sx={{
          height: '100%',
          minHeight: '70px', 
          paddingY: 0,
          paddingX: { xs: 1, sm: 2 }, // Reduced padding on mobile (xs), normal on larger screens
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', // Ensures even distribution
        }}
      >

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: { xs: '60%', sm: '70%' }, // Limit width on mobile to prevent overflow
          }}
        >
          <Image src="/Logo.png" alt="Project Logo" width={27} height={22} />
          <Typography
            variant="h5"
            sx={{
              color: colors.textPrimary,
              fontSize: { xs: '14px', sm: '16px', md: '18px' }, // Responsive font size
              fontWeight: 500,
              lineHeight: '33px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              ml: { xs: 0.5, sm: 1 }, // Smaller margin on mobile
              maxWidth: '100%', // Ensures it fits within parent
            }}
          >
            Event Name
          </Typography>
        </Box>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} /> {/* Hidden on mobile */}

        {/* Button */}
        <CustomButton
          buttonColor="#FFFFFF"
          textColor="#000000"
          text="العربية"
          icon=""
          width={{ xs: '50px', sm: '67px' }} // Smaller width on mobile
          onClick={() => null}
        />
      </Toolbar>
    </AppBar>
  );
}