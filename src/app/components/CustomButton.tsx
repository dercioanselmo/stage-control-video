import React from 'react';
import { Button } from '@mui/material';
import Image from 'next/image';

type ResponsiveWidth = string | { xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
interface CustomButtonProps {
  buttonColor: string;
  textColor: string;
  text: string;
  icon: string;
  width?: ResponsiveWidth;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ buttonColor, textColor, text, icon, width, onClick }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: buttonColor,
        color: textColor,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        '&:hover': {
          backgroundColor: buttonColor,
          opacity: 0.9,
        },

        width: width,
        height: 33,
        borderRadius: 30, 
        opacity: 1, 
        justifyContent: 'center',

        fontSize: { xs: '12px', sm: '14px' }, // Responsive text size
        paddingX: { xs: 1, sm: 2 }, // Adjust padding

        padding: '0 16px',
        
        fontWeight: 'SemiBold', 
        fontFamily: 'Poppins, sans-serif',
        lineHeight: '40px', 
        textTransform: 'none', 
        border: buttonColor === '#000000' ? '1px solid white' : 'none',
        borderColor: '#909090',
      }}
    >
      {text}
      {icon && <Image src={icon} alt={text} width={20} height={20} />}
    </Button>
  );
};

export default CustomButton;