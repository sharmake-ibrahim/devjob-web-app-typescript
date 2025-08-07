import React from "react";
import { Link, useParams } from "react-router-dom"
import data from "../data.json";




const Details: React.FC = ()=> {

    const {id} = useParams()

    const details_data = data.find((job)=> job.id === Number(id));

    console.log("this job is clicked", details_data)

    return (

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

                    
    <section className="job-header">
         <div className="logo" style={{background: details_data?.logoBackground}}>
            <img src= {details_data?.logo} alt=""/>
        </div>
            <div className="txt">
                <strong>{details_data?.company}</strong>
                <p>{details_data?.company}</p>
            </div>

            
               <Link className="details-btn" to= {`${details_data?.apply}`} > Company Site</Link>
    </section>
    <main>
          <div className="container">
  
            <section className="detials-content">
                 <div className="job-desc">
                    <div className="flex">
                        <p>{details_data?.postedAt}</p>
                        <li>{details_data?.contract}</li>
                    </div>

                    <div className="job-txt">
                        <h1>{details_data?.position}</h1>
                         <Link className="details-btn" to= {`${details_data?.apply}`} > Company Site</Link>
                    </div>
                    <p className="location">{details_data?.location}</p>
                </div>

                <article>
                    <p>{details_data?.description}</p>
                </article>

                <ul className="info-one"> 
                    <strong>Requirements</strong>
                    <p>{details_data?.requirements.content}</p>
                    {details_data?.requirements.items.map( item => <li>{item}</li>)}
                </ul>
                <ol className="info-two"> 
                    <strong>What You Will Do</strong>
                    <p>{details_data?.role.content}</p>
                    {details_data?.role.items.map(item => <li>{item}</li>)}
                </ol> 
            </section>
       
        
        </div>
    </main>
    <footer>
        <div className="container-footer">

       
        <div className="footer-content">
 
            <div className="position">
                        <h1>{details_data?.position}</h1>
                        <p>{details_data?.location}</p>
                    </div>
                     <Link className="btn" to = {`${details_data?.apply}`}>Load More</Link> 
         </div> 

 </div>
    </footer>
        </>
    )
}

export default Details