import desktopImg from "./assets/desktop/bg-pattern-header.svg";
import tabletIMg from "./assets/tablet/bg-pattern-header.svg";
import mobileImg from "./assets/mobile/bg-pattern-header.svg";
import { useState, useEffect } from "react";
import logo from "./assets/desktop/logo.svg";
import { Link } from "react-router-dom";



const Header = ()=> {

        const [darkMode, setDarkMode] = useState<boolean>(
                    localStorage.getItem("darkmode") === "active"
            );
    
        useEffect(() => {
                    if (darkMode) {
                    document.body.classList.add("darkmode");
                    localStorage.setItem("darkmode", "active");
                    } else {
                    document.body.classList.remove("darkmode");
                    localStorage.removeItem("darkmode");
                    }
      }, [darkMode])

    return (

               <header>
                
                   <picture className="header-bg-img">
                            <source media="(min-width: 650px)" srcSet= {desktopImg} />
                            <source media="(min-width: 450px)" srcSet= {tabletIMg} />
                            <img src= {mobileImg} alt="Header background" />
                </picture>

        <div className="logo">
          <Link to= "/" >
           <img src={logo} alt="devjob logo image"/>
          </Link>
           
        </div>

        
       <button
      className="theme-switch"
      onClick={() => setDarkMode((prev) => !prev)}
      aria-label="Toggle dark mode"
    >
      {/* 🌙 Show moon when in LIGHT mode */}
      {darkMode  ? (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.28451 10.3333C7.10026 10.8546 7 11.4156 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C11.4156 7 10.8546 7.10026 10.3333 7.28451" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 2V4" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 20V22" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 12L2 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12L20 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.7778 4.22266L17.5558 6.25424" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4.22217 4.22266L6.44418 6.25424" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6.44434 17.5557L4.22211 19.7779" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.7778 19.7773L17.5558 17.5551" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>

      )  : (
       <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z" fill="#1C274C"></path> <path d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z" fill="#1C274C"></path> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1C274C"></path> </g></svg>
      )}

  
    </button>

       
    </header>
    )
}

export default Header