import React, { useState } from "react"



function TextForm(props){
const[text,setText]=useState("Enter text here");


const handleUpClick=()=>{
  let newText=text.toUpperCase();
  setText(newText);
}
const handleloClick=()=>{
  let newText=text.toLowerCase();
  setText(newText);
}
const handleclearClick=()=>{
  let newText="Enter text here";
  setText(newText);
}

const handleOnChange=(event)=>{

  setText(event.target.value);
}


return(

  <div>

  <div className="container">
  <h1 className="mt-5">{props.heading}</h1>
    <div className="mb-3">

  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleloClick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
  </div>
  
  <div className="container mt-4" >
   <h2>Your Text Summary</h2>
   <p>{text.split(" ").length} words, {text.length} char</p>
   <p>{0.08*text.split(" ").length}Minutes to read</p>
   <h2>Priveiew</h2>
   <p>{text}</p>
  </div>

  </div>
)
};

export default TextForm;