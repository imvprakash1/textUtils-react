import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Form(props) {
  const [text,setText]=useState("")
  const wordCount=(words)=>{
    if(words==='')
      return 0
    else if(words[words.length-1]===' ')
      return words.split(/[ ]+/).length-1
    else
      return words.split(/[ ]+/).length
  }
  const handleUpCLick=()=>{
    setText(text.toUpperCase())
    props.showAlert("Text converted to Upper case",'success')
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  const handleExtraSpace=(event)=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed",'success')
  }
  const handleClearText=(event)=>{
    setText("")
    props.showAlert("Textarea cleared",'success')
  }
  return (
    <>
    <div className="container">
        <div className="mb-3">
        <h1 className="my-3">{props.heading}</h1>
        <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpCLick}>Convert to Upper case</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h2>
            Your Text Summaty
        </h2>
        <p>Your text has {wordCount(text)} words and {text.length} characters.</p>
    </div>
    <div className="container my-3">
        <h2>
            Preview
        </h2>
        <p>{text.length>0?text:"Enter text in the above area"}</p>
    </div>
    </>
    
  )
}

Form.propTypes={heading:PropTypes.string.isRequired}
Form.defaultProps={heading:"Enter your text to Analyze"}