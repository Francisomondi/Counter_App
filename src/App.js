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
      <ContactList
        imageUrl="logo192.png "
        name="Francis OMondi"
        phone="066784483939"
        email="me@gmail.com"
      />
      <ContactList
        imageUrl={"logo192.png "}
        name="Jadon Sancho"
        phone="0740463376"
        email="me@gmail.com"
      />
      <ContactList
        imageUrl={"logo192.png "}
        name="Eliud Kipchoge"
        phone="07488888888"
        email="me@gmail.com"
      />

      <Footer />
    </div>
  );
}

export default App;
