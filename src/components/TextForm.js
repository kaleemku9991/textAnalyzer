import React, { useState } from "react"



function TextForm(props){
const[text,setText]=useState("Enter text here");


const handleUpClick=()=>{
  let newText=text.toUpperCase();
  setText(newText);
}


const handleOnChange=(event)=>{

  setText(event.target.value);
}


return(

  <div>

  <div className="container">
  <h1>{props.heading}</h1>
    <div className="mb-3">

  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
  </div>
  
  <div className="container mt-4" >
   <h1>Your Text Summary</h1>
   <p>{text.split(" ").length} words, {text.length} char</p>
  </div>

  </div>
)
};

export default TextForm;