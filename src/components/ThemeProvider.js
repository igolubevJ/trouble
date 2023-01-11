import React, { 
  createContext, 
  useContext, 
  useState,
  useMemo,
  useCallback
} from 'react';

const themes = {
  light: {
    type: "light",
    fontColor: "#2b2c38",
    background: "#fff"
  },
  dark: {
    type: "dark",
    fontColor: "#dcdcdc",
    background: "#2b2c38"
  }
};

const ThemeContext = createContext({});

export default function ThemeProvider({children}) {
  const [theme, setTheme] = useState(themes.dark);

  const changeTheme = useCallback(() => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  }, [theme]);

  const themeAPI = useMemo(() => ({
    theme,
    changeTheme
  }), [theme, changeTheme]);

  return (
    <ThemeContext.Provider value={themeAPI}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);
