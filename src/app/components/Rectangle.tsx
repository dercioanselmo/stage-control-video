import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';

const Rectangle = ({ 
  maxWidth = '100%',
  bgcolor = 'grey.500',
  sx = {},
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);;

  useEffect(() => {
    const resizeRectangle = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const parentHeight = container.parentElement!.clientHeight;
        const parentWidth = container.parentElement!.clientWidth;
        
        // Calculate dimensions maintaining 16:9 ratio
        let width = parentWidth;
        let height = width * (9/16);
        
        if (height > parentHeight) {
          height = parentHeight;
          width = height * (16/9);
        }

        container.style.width = `${width}px`;
        container.style.height = `${height}px`;
      }
    };

    resizeRectangle();
    window.addEventListener('resize', resizeRectangle);
    return () => window.removeEventListener('resize', resizeRectangle);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        maxWidth,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        ref={containerRef}
        sx={{
          bgcolor,
          ...sx,
        }}
        {...props}
      />
    </Box>
  );
};

export default Rectangle;