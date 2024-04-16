import React from 'react'
import './nav.css'
import { Offline, Online } from "react-detect-offline";
import { useState } from 'react';
import { useEffect } from 'react';


function Nav() {
let[data,setdata]=useState(true)

useEffect(()=>{
    setdata(Online?true:false)
})




console.log(data)




   
    
    
    
    
    

    



  return (
    
    <>
    {
        


    <nav class="navbar navbar-expand-lg navdiv">
  <div class="container-fluid">
  <div className={'navhead'}>QR GENERATOR</div>
 
 
  </div>
</nav>
}


    </>
  )
}

export default Nav