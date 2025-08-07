import React, { useState} from "react";

import data from "../data.json";
import { Link } from "react-router-dom";
const Home:React.FC =  ()=> {
    
    type InputData = {

    }
        const [inputTxt , setInputTxt] = useState<string>("")
        const [search, setSearch] = useState<string>("")

        const handleInpuTxt = (e)=> {
            setInputTxt(e.target.value)
            setSearch(inputTxt)
        }

        
    return(
        <>
                   <header>
                
                   <picture className="header-bg-img">
                            <source media="(min-width: 650px)" srcSet="/assets/desktop/bg-pattern-header.svg" />
                            <source media="(min-width: 450px)" srcSet="/assets/tablet/bg-pattern-header.svg" />
                            <img src="/assets/mobile/bg-pattern-header.svg" alt="Header background" />
                </picture>

        <div className="logo">
            <img src="Public/assets/desktop/logo.svg" alt=""/>
        </div>

        
        <button className="theme-switch">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/></svg>
        </button>
    </header>
    <section className="search-div">
        <div className="searchBox">
            <input type="text"  className="input-txt" placeholder="Filter by title, location, company"
                value={inputTxt}
                onChange={(e)=> handleInpuTxt(e)}
            />
        </div>

     
    </section>

    
    <main>
          <div className="container">
        <img src="" alt="" />

        <section className="jobs-section">
            {data.filter( (job)=> {
                return search.toLocaleLowerCase() === "" ? job
                : job.company.toLowerCase().includes(search) ||
                    job.location.toLocaleLowerCase().includes(search) ||
                    job.position.toLowerCase().includes(search) ||
                    job.contract.toLowerCase().includes(search) 
            }).map((job, index)=> (
                
                    <div className="job-div" key={index}>
                            <Link to= { `/${job.id}`} >
                             
                               
                                    <div className="job-logo" style= {{ background: job.logoBackground }}> <img src={job.logo} alt=""/> </div>
                                        <div className="time-job-type">
                                            <p>{job.postedAt}</p>
                                            <li>{job.contract}</li>
                                        </div>
                                        <div className="position">
                                            <h1>{job.position}</h1>
                                            <p>{job.company}</p>
                                        </div>
                                        <strong>{job.location}</strong>
                                  
                                         </Link>
                </div>
            ))}
           
        </section>
        
        </div>
    </main>
        
        </>


    )}


export default Home
