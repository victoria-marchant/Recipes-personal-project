import React from "react"
import Card from "./Card"


export default function Cards(){

  return(
<>

    <div className="container fluid -md-8">
      <div className="header">
      <div className= "navbar-nav ml-auto">
      </div>
      </div>
      <h1 className="text-center mt-3 mb-3 ">Recipes</h1>
        <div className="row row-cols-3 gx-3 gy-3">
            <Card/>
    </div>
    </div>
    </>
  )}



{/* //   <div ClassNameName="container fluid -md-8">
//   <h1>Recipes</h1>
//     <div ClassNameName="row">
//         <div ClassNameName="col-sm">
//         <Card/>
//         </div>
//         <div ClassNameName="col-sm">
//         <Card/>
//         </div>
//         <div ClassNameName="col-sm">
//         <Card/>
//         </div>
//     </div>
//     <div ClassNameName='row'>
//         <div ClassNameName='col-sm'>
//          <Card/>
//         </div>
//         <div ClassNameName='col-sm'>
//           <Card/>
//         </div>
//         <div ClassNameName='col-sm'>
//           <Card/>
//         </div>
//     </div>
//     <div ClassNameName='row'>
//         <div ClassNameName='col-sm'>
//          <Card/>
//         </div>
//         <div ClassNameName='col-sm'>
//           <Card/>
//         </div>
//         <div ClassNameName='col-sm'>
//           <Card/>
//         </div>
//     </div>
// </div> */}