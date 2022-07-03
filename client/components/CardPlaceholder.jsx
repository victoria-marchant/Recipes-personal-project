import React, { useState, useEffect } from 'react'



export default function CardPlaceholder(){


  
 
  return(
    <>
    <div  className="card">
    <img src="https://picsum.photos/300/200" className="card-img-top img-fluid" alt="..."/>
    <div className="card-body align-bottom d-flex flex-column">
    <h5 className="card-title">Title</h5>
    <p className="card-text">Some cool text here, Some cool text here, Some cool text here, Some cool text here,</p>
    {/* <div className="card-footer text-muted mx-auto"> */}
    <a className=" mt-auto align-self-end btn btn-primary align-self-end" to="#" >Go to recipe</a>
    </div>
    </div>

</>
  )

}

