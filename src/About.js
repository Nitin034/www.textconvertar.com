import React, { useState } from 'react'

export default function About() {

   const [myStyle, setMystyle] = useState({
        color:  'black',
        backgroundColor: "#565196",
    })

    const [btnText, setBtnText] = useState("Color Change")

    const toggleStyle = ()=>{
        if(myStyle.color === "black"){
            setMystyle({
                color:  '#565196',
                backgroundColor: "black",
        
            })
            setBtnText("Change color")
        }
        else{
            setMystyle({
                color:  'black',
                backgroundColor: "#565196",
        
            })
            setBtnText("Change color")
        }
    }
    const toggleStyleRed = ()=>{
        if(myStyle.color === "Red"){
            setMystyle({
                color:  'black',
                backgroundColor: "#fcba03",
        
            })
            setBtnText("Change color")
        }
        else{
            setMystyle({
                color:  '#black',
                backgroundColor: "#fc4103",
        
            })
            setBtnText("Change color")
        }
    }
    const toggleStyleGreen = ()=>{
        if(myStyle.color === "Green"){
            setMystyle({
                color:  'black',
                backgroundColor: "#095423",
        
            })
            setBtnText("Change color")
        }
        else{
            setMystyle({
                color:  '#black',
                backgroundColor: "#095423",
        
            })
            setBtnText("Change color")
        }
    }
    const toggleStyleYellow = ()=>{
        if(myStyle.color === "Yellow"){
            setMystyle({
                color:  'black',
                backgroundColor: "#e0d33d",
        
            })
            setBtnText("Change color")
        }
        else{
            setMystyle({
                color:  '#black',
                backgroundColor: "#e0d33d",
        
            })
            setBtnText("Change color")
        }
    }
    

  return (
    <>
    <div className='container' style={myStyle}> 
    <h1 className='mx-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Convert to Uppercase
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>The UPPER CASE text tool takes every lower case letter inputted into the text area and converts all to upper case letters.

Upper case letters or “ALL CAPS” find use in words or phrases a writer wants to emphasize, in titles on book covers; in advertisements, to highlight a message; in newspaper headlines, and on building plaques. They also indicate acronyms in texts.</strong><code>.Naversettle67</code>,Paste the text you copied into the text area provided on the screen:
      </div>
    </div>
  </div>
  <div className="accordion-item"style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Convert to Lowercase
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        <strong>The Capitalize Word text tool will take every first lower case letters of every word in the sentence inputted and change all to upper case letters.

Capitalized words or “Title Cases” as they are known are widely used for titles in texts where every word in the sentence; except for articles, conjunctions and prepositions; begins with a capital letter.

It's common to see title cases used for titles of books, plays, and movies, but seldom for articles. This variation is mostly a question of style. When writing, decide the headline style you want to use. This is of course if you are not writing under strict guidelines where you are given a headline style</strong> <code>.Naversettle67</code>, You should have your output in a few seconds:
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Convert to Sentencecase
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>The Sentence case text tool takes only the first letter of the first word of the sentence (or group of words), and proper nouns inputted into the text area and convert it to upper case.

Sentence case also referred to as “down style” or “reference style” is used by newspaper publishers in the United States and the United Kingdom for titles, headings, and news headlines. Particularly, all publications in the United Kingdom widely adopt sentence cases in several publications: lists, bibliographies, reference lists; etcetera.</strong>

Your typical word processor can perform this task, but you can use this tool to check for any grammatical errors before submitting to your editor.<code>Naversettle67</code>Copy the text you want to convert from the word processor you are using.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseFour">
      Copy All Text
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>You can also highlight your entire document by placing your mouse cursor in the left margin and then quickly clicking the left mouse button one times in the copy all text</strong> <code>.Naversettle67</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseFive">
      Remove Extra Spaces
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>To Simpal one click you remove all extra Spaces in your text</strong> It is hidden by default, until the collapse plugin adds the appropriate classes   you want a quick way of crossing out your text, this is a great tool. Type out the normal text you want to be lined through and you will see it get automatically generated, ready for you to copy and paste.<code>.Naversettle67</code>, click on Remove Extra Spaces.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseSix">
      Clear Text
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>To Simpal one click you delete all text in the screen.</strong>To Simpal one click you remove all extra Spaces in your text <code>.Naversettle67</code>, One click you delete all text in the screen..
      </div>
    </div>
  </div>
     
<h6 className='my-2'>Color Changing Bar</h6>
  <div className='d-flex'>
    <div className='bg-primary rounded mx-2 my-2' onClick={toggleStyle} style={{height:'15px',width:'15px'}}></div>
    <div className='bg-success rounded mx-2 my-2' onClick={toggleStyleGreen} style={{height:'15px',width:'15px'}}></div>
    <div className='bg-warning rounded mx-2 my-2' onClick={toggleStyleYellow} style={{height:'15px',width:'15px'}}></div>
    <div className='bg-danger rounded mx-2 my-2' onClick={toggleStyleRed} style={{height:'15px',width:'15px'}}></div>
  </div>
  
</div>
</div>
    </>
  )
}
