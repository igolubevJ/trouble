import React from 'react';
import Toggle from 'react-toggle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from './ThemeProvider';

export default function ThemeToggle({className}) {
  const { changeTheme } = useTheme();

  return (
    <div className={`${className}`}>
      <Toggle 
        onChange={changeTheme}
        className="day-night-toggle"
        icons={{
          checked: <FontAwesomeIcon inverse icon="sun" />,
          unchecked: <FontAwesomeIcon inverse icon="moon" />
        }}
      />
    </div>
  );
}
