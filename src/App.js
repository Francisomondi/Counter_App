import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import ContactList from "./components/ContactList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <ContactList />

      <Footer />
    </div>
  );
}

export default App;
