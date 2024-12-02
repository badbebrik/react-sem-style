import React from 'react';
import { Switch, Typography, Stack } from '@mui/material';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleTheme }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>Light</Typography>
      <Switch checked={darkMode} onChange={toggleTheme} />
      <Typography>Dark</Typography>
    </Stack>
  );
};

export default ThemeToggle;
