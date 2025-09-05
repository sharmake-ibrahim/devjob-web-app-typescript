import React, { useState } from "react";

import data from "../data.json";
import { Link } from "react-router-dom";
import type { Job } from "./Types/Job";
import "./App.css";
import Header from "./Header";



const Home:React.FC =  ()=> {
    
   
        const [inputTxt , setInputTxt] = useState<string>("")
        const [search, setSearch] = useState<string>("")
      
 
        const handleInpuTxt = (e:any)=> {
            setInputTxt(e.target.value)
            setSearch(inputTxt)
        }



        
    return(
        <>
      <Header/>
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
      

        <section className="jobs-section">
            {data.filter( (job:Job)=> {
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
