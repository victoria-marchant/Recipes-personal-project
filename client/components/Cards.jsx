import React from "react"
import Card from "./Card"

export default function Cards(){

  return(

    <div className="container fluid -md-8">
      <h1>Recipes</h1>
        <div className="row">
            <div className="col-sm">
            <Card/>
            </div>
            <div className="col-sm">
            <Card/>
            </div>
            <div className="col-sm">
            <Card/>
            </div>
        </div>
        <div className='row gutter-y'>
            <div className='col-sm'>
             <Card/>
            </div>
            <div className='col-sm'>
              <Card/>
            </div>
            <div className='col-sm'>
              <Card/>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm'>
             <Card/>
            </div>
            <div className='col-sm'>
              <Card/>
            </div>
            <div className='col-sm'>
              <Card/>
            </div>
        </div>
    </div>
  )}