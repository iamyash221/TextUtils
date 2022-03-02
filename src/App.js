import "./App.css";
import DarkMode from "./Components/DarkMode";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";

function App() {
  return (
    <>
      <Navbar title="MyWebsite" />
      <div className="container my-5">
        <TextArea heading="Enter text below" />
      </div>
      <div className="container">
        <DarkMode />
      </div>
    </>
  );
}

export default App;
