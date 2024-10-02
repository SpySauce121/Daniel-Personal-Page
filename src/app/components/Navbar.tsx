"use client"; // Označ tento súbor ako Client Component

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Link from 'next/link';
import AssistantIcon from '@mui/icons-material/Assistant';
import LoginIcon from '@mui/icons-material/Login';

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') {
      setValue(0);
    } else if (path === '/favorites') {
      setValue(1);
    } else if (path === '/nearby') {
      setValue(2);
    }
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction 
          label="Domov" 
          icon={<HomeIcon />} 
          component={Link}
          href="/" 
        />
        <BottomNavigationAction 
          label="Profil" 
          icon={<Person2Icon />} 
          component={Link} 
          href="/profil" 
        />
        <BottomNavigationAction 
          label="Posty" 
          icon={<AssistantIcon />} 
          component={Link} 
          href="/prispevok" 
        />
        <BottomNavigationAction 
          label="Prihlasenie" 
          icon={<LoginIcon />} 
          component={Link} 
          href="/auth/prihlasenie" 
        />
        <BottomNavigationAction 
          label="Registracia" 
          icon={<HowToRegIcon />} 
          component={Link} 
          href="/auth/registracia" 
        />
      </BottomNavigation>
        
    </Box>
  );
}
