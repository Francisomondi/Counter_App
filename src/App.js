import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import MyInfo from "./components/MyInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <MyInfo />
      <Footer />
    </div>
  );
}

export default App;
