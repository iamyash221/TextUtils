import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import DarkMode from "./Components/DarkMode";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light");

  const [btnText, setbtnText] = useState("Enable Dark Mode");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setbtnText("Disable Dark Mode");
      document.body.style.backgroundColor = "#121212";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setbtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="MyWebsite"
          mode={mode}
          toggleMode={toggleMode}
          btnText={btnText}
        />

        <Alert alert={alert} />

        <div className="container my-5">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextArea
                  heading="Enter text below"
                  mode={mode}
                  alert={alert}
                />
              }
            />
            <Route
              exact
              path="/about"
              element={
                <div className="container">
                  <DarkMode mode={mode} />
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
