"use client"; // Označ tento súbor ako Client Component

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';

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
          label="Recents" 
          icon={<HomeIcon />} 
          component={Link} 
          href="/(home)/page.tsx" 
        />
        <BottomNavigationAction 
          label="Favorites" 
          icon={<FavoriteIcon />} 
          component={Link} 
          href="/favorites" 
        />
        <BottomNavigationAction 
          label="Nearby" 
          icon={<LocationOnIcon />} 
          component={Link} 
          href="/nearby" 
        />
      </BottomNavigation>
    </Box>
  );
}
