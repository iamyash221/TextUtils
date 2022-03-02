import "./App.css";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";

function App() {
  return (
    <>
      <Navbar title="MyWebsite" />
      <div className="container my-5">
        <TextArea heading="Enter text below" />
      </div>
    </>
  );
}

export default App;
