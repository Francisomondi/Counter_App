import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Joke from "./components/Joke";
import ContactList from "./components/ContactList";
import Footer from "./components/Footer";
import JokesData from "./components/JokesData";
import Products from "./components/Products";
import Product from "./components/Product";
import StateTutorial from "./components/StateTutorial";

function App() {
  const JokeComponent = JokesData.map(joke => {
    return <Joke question={joke.question} answer={joke.answer} />;
  });

  const ProductComponent = Products.map(item => <Product product={item} />);

  return (
    <div className="container">
      <Header />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      {JokeComponent}

      <StateTutorial />

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
