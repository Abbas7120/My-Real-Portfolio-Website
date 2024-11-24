
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download'

    
export default function CustomButton() {
  return (
    <Stack spacing={1} direction="row">
     
     <Button 
        variant="contained" 
        startIcon={<DownloadIcon />} 
      
  href="https://drive.google.com/file/d/1vERDP-t88KivVkdV9iw6nz-aaLvfZpDz/view?usp=sharing"
      >
        Download Resume
      </Button>
     
    </Stack>
  );
}

  
