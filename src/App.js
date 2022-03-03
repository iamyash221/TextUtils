import { useState } from "react";
import "./App.css";
import DarkMode from "./Components/DarkMode";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";

function App() {
  const [mode, setMode] = useState("light");

  const [btnText, setbtnText] = useState("Enable Dark Mode");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setbtnText("Disable Dark Mode");
      document.body.style.backgroundColor = "#121212";
    } else {
      setMode("light");
      setbtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar
        title="MyWebsite"
        mode={mode}
        toggleMode={toggleMode}
        btnText={btnText}
      />
      <div className="container my-5">
        <TextArea heading="Enter text below" mode={mode} />
      </div>
      <div className="container">
        <DarkMode mode={mode} />
      </div>
    </>
  );
}

export default App;
