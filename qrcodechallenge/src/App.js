import "./App.css";
import qr from "./image-qr-code.png";

function App() {
  return (
    <div className="main">
      <div className="card">
        <img src={qr} className="img" alt="aaa"></img>
        <h3 className="head">
          Improve your front-end skill by building project
        </h3>
        <p className="paragraf">
          Scan the QR code to visit Frontend Mentor and take your coke skills to
          the next level
        </p>
      </div>
    </div>
  );
}

export default App;
