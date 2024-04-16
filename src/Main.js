import { Offline, Online } from "react-detect-offline";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { CiWifiOff } from "react-icons/ci";
import './main.css'
import { saveAs } from 'file-saver'

function Main() {
  let[data,setdata]=useState()
 let[data2,setdata2] =useState()
 

var fun=(e)=>{
  if(data){
  e.preventDefault()
setdata2("https://quickchart.io/qr?text="+data)
  }
  
}

const downloadImage = () => {
  saveAs(data2, 'image.jpg') // Put your image URL here.
}




   
  
  
  
  return (
    <div>
   
      <div className={'main'}>
        <div className={'empty'}></div>
      <div className={"mb-3 inputdiv"}>
    <label for="exampleInputEmail1" class="form-label labeltext">You can enter text or a link</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Text/Link" onChange={(e)=>{setdata(e.target.value)}}/>
    <div id="emailHelp" class="form-text inputtext">you can not enter text or link together</div>
    <div className={'donediv'}><button type="button" class="btn btndone" onClick={fun}>Done</button></div>

{ data2?
    <div className={'qrcode'}>
      <img src={data2} className={'imgqr'} alt="check your internet connection"/>
    </div>:<p></p>
   
}
{data2?<div className={'downloaddiv'}><button type="button" class="btn btn-download"onClick={downloadImage}>Download</button></div>:<p></p>}



  </div>


      </div>


      
    

  </div>

  )
}

export default Main