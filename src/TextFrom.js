import { useState } from "react"
import React  from 'react'



export default function TextFrom(props) {
     
    const handleUpClick = () =>{
     //console.log("Uppercase was clicked"+ text);
     let newText = text.toUpperCase();
     setText(newText)
     props.showAlert("Your Text Converted to Uppercase!", "success");
    }
    const handleLoClick = () =>{
     let newText = text.toLowerCase();
     setText(newText)
     props.showAlert("Your Text Converted to LowerCase!", "success");
    }
    const handleCopy = () =>{
     let text = document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
     props.showAlert("Your all Text Copyedited!", "success");
    }
    const handleExtraSpaces = () =>{
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "))
     props.showAlert("Your Text Extra Spaces Removed!", "success");
    }
    const handleSeClick = ()=>{
      let newText = text.charAt(0)
     .toUpperCase() + text.slice(1). toLowerCase();
     setText(newText)
    props.showAlert("Your TextConverted to Sentence Case!", "success");
   
    }
    const handleClearClick = () =>{
     let newText = (" ");
     setText(newText)
     props.showAlert("Your All Text Clear!", "success");
    }

    const handleOnChange = (event) =>{
    // console.log("OnChange");
     setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label mb-2">Share Your Thoughts Naversettle67 World Will Convert them in Uppercase to Lowercase and Sentencecase & Remove Extra Spaces & also Copy all text..</label>
  <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#1b225e':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className='my-2 mx-2 btn btn-info' onClick={handleUpClick}>Convert to Uppercase</button>

  <button  disabled={text.length===0}className='mx-2 my-2 btn btn-warning' onClick={handleLoClick}>Convert to Lowercase</button>

  <button  disabled={text.length===0}className='mx-2 my-2 btn btn-success' onClick={handleSeClick}>Convert to Sentencecase</button>

  <button  disabled={text.length===0}className='mx-2 my-2 btn btn-primary' onClick={handleCopy}>Copy All Text</button>

  <button  disabled={text.length===0}className='mx-2 my-2 btn btn-secondary' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

  <button  disabled={text.length===0}className='mx-2 my-2 btn btn-danger' onClick={handleClearClick}>Clear Text</button>
</div>

<div className="container my-3"style={{color:props.mode==='dark'?'white':'#042743'}}>
<h1>Your Text Summary</h1>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} world and {text.length} characters </p>
<p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
<h1>Preview</h1>
<p>{text.length>0?text:"Enter somethig in the textbox above to preview it here"}</p>
</div>
    </>
  )
}
