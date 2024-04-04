import { createContext,useContext,useState } from "react";
export const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
    const [theme,setTheme] = useState("light");
    const toggleTheme = () => { setTheme(theme === 'light' ? 'dark' : 'light');console.log("toggled") };
    return (<ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>);};

export const useTheme = () => (
    useContext(ThemeContext));
