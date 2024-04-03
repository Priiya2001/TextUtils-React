import React,{useState} from 'react'

export default function TextUtils(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase ","success")
    }
    const handleLoClick=()=>{
        // console.log("Lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase ","success")
    }
    const handleClearClick=()=>{
        // console.log("clear clicked");
        let newText=('');
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    // const handleCopy=()=>{
    //   var text=document.getElementById("myBox");
    //   text.ariaSelected();
    //   navigator.clipboard.writeText(text.value)
    // }
    
    const handleOnClick=(event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    const[text,setText]=useState(' ')
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className='form-control' value={text} onChange={handleOnClick} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="9"></textarea>
      </div>
      <button className='btn btn-primary ' onClick={handleUpClick}>Convert to uppercase</button>
      <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to lowercase</button>
      <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clean</button>
      {/* <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button> */}
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
     <h1>Your text summary</h1>
     <p>{text.split(" ").length} words and {text.length}characters</p>
     <p>{0.008*text.split(" ").length} Minutes read</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
