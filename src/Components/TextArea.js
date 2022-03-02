import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("Enter text here...");

  const handleUpClick = () => {
    console.log("Button Clicked..");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change..");
    setText(event.target.value);
  };

  return (
    <div className="mb-3">
      <h1>{props.heading}</h1>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8"
        value={text}
        onChange={handleOnChange}
      ></textarea>
      <button className="btn btn-primary mt-3 p-1" onClick={handleUpClick}>
        Change to UpperCase
      </button>
    </div>
  );
}
