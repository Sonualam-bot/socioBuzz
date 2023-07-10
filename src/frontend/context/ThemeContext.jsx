import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    // here above i am checking if there is a theme stored in localStorage and if found that theme is used and if not then default is light theme. and next useEffect does the magic to store the theme in localStorage

    const toggleTheme = () => theme === "light" ? setTheme("dark") : setTheme("light")


    //here i am trying to dynamically update the value of the theme in the useState based on the theme of the application
    useEffect(() => {
        localStorage.setItem("theme", theme)
        document.body.className = theme
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }} >
            {children}
        </ThemeContext.Provider>
    )
}