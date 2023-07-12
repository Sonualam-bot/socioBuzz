import "./ThemeSwitcher.css"
import { useContext } from "react"
// import { div } from "react-router-dom"
import { ThemeContext } from "src/frontend/context/ThemeContext"

import { CiDark } from "react-icons/ci"
import { CiLight } from "react-icons/ci"




export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <>
            <div className={`App  ${theme} `}>
                <div className="themeNav" onClick={toggleTheme} >
                    {theme === "light" ?
                        <span className="darkSvg">
                            <CiDark />
                        </span> :
                        <CiLight />}
                </div>

            </div>
        </>
    )
}