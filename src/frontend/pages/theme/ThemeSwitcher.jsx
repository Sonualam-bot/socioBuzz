import "./ThemeSwitcher.css"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ThemeContext } from "src/frontend/context/ThemeContext"

import { MdDarkMode } from "react-icons/md"
import { CiLight } from "react-icons/ci"



export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <>
            <div className={`App  ${theme} `}>
                <NavLink className="sidebarOptions" onClick={toggleTheme} > {theme === "light" ? <MdDarkMode /> : <CiLight />} </NavLink>
            </div>
        </>
    )
}