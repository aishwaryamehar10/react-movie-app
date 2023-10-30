import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./Layout.css";

function Layout() {

    const [isDarkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        if(isDarkTheme) {
            document.body.classList.add("dark-theme")
        }
        else {
            document.body.classList.remove("dark-theme")
        }
    },[isDarkTheme])

    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme);
    }

    return(
        <div className={`layout-container $ {isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <Navbar toggleTheme = {toggleTheme} isDarkTheme={isDarkTheme} />
        </div>
    )

}
export default Layout;