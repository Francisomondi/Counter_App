import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Joke from "./components/Joke";
import ContactList from "./components/ContactList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <Joke answer="Most people go to depresion because of love and money" />
      <Joke question="who mooved my cheese" answer="stupid ass wannabees" />
      <Joke question="who mooved my cheese" answer="stupid ass wannabees" />
      <Joke question="who mooved my cheese" answer="stupid ass wannabees" />
      <ContactList
        contact={{
          imageUrl: "logo192.png ",
          name: "Francis OMondi",
          phone: "066784483939",
          email: "francis@gmail.com"
        }}
      />
      <ContactList
        contact={{
          imageUrl: "logo192.png ",
          name: "Jadon Sancho",
          phone: "0740463376",
          email: "njoro@gmail.com"
        }}
      />
      <ContactList
        contact={{
          imageUrl: "logo192.png ",
          name: "Eliud Kipchoge",
          phone: "0797344578",
          email: "eliud@gmail.com"
        }}
      />

      <Footer />
    </div>
  );
}

export default App;
