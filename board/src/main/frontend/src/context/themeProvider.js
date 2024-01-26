// ThemeProvider.js
import { useState, createContext, useContext } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from "../theme/GlobalStyles";

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const LocalTheme = window.localStorage.getItem("theme") || "light";
  const [themeMode, setThemeMode] = useState(LocalTheme);

  const toggleTheme = () => {
    setThemeMode((prevThemeMode) =>
      prevThemeMode === "light" ? "dark" : "light"
    );
    window.localStorage.setItem(
      "theme",
      themeMode === "light" ? "dark" : "light"
    );
  };

  const themeObject = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <StyledProvider theme={themeObject}>
        <GlobalStyle />
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);
  const { themeMode, toggleTheme } = context;

  return [themeMode, toggleTheme];
}

export { ThemeProvider, useTheme };
