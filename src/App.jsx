import "./App.css";
import ButtonsPlus from "./components/ButtonsPlus";
import CardProduct from "./components/CardProduct";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Title from "./components/Title";
import "./assets/FontAwesomeIcons/icons";

function App() {
  return (
    <div className="">
      <Navbar />
      <section>
        <Slider />
      </section>
      <section className="">
        <Title
          title="Más populares"
          subtitle="Detalles que hablan: Flores que expresan lo que las palabras no pueden"
        />
        <CardProduct />
        <ButtonsPlus url="/tienda" title="Ver más" />
      </section>
      <section>
        <Title
          title="Nuestros compromisos"
          subtitle="Creando momentos con detalles únicos"
        />
      </section>
    </div>
  );
}

export default App;
