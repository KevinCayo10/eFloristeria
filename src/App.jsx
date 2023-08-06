import "./App.css";
import CardProduct from "./components/CardProduct";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Title from "./components/Title";

function App() {
  return (
    <div className="">
      <Navbar />
      <section>
        <Slider />
      </section>
      <section className="">
        <Title
          title="Productos"
          subtitle="Detalles que hablan: Flores que expresan lo que las palabras no pueden"
        />
        <CardProduct />
      </section>
    </div>
  );
}

export default App;
