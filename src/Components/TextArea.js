import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("Button Clicked..");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    console.log("Button Clicked..");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change..");
    setText(event.target.value);
  };

  return (
    <>
      <div className="mb-3 container">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary mt-3 " onClick={handleUpClick}>
          Change to UpperCase
        </button>
        <button className="btn btn-primary mt-3 mx-3" onClick={handleDownClick}>
          Change to LowerCase
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        {/* <h2>Preview</h2>
        <p>{text}</p> */}
      </div>
    </>
  );
}
