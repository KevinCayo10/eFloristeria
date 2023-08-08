import "./App.css";
import ButtonsPlus from "./components/ButtonsPlus";
import CardProduct from "./components/CardProduct";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Title from "./components/Title";
import "./assets/FontAwesomeIcons/icons";
import CardDuty from "./components/CardDuty";
import Footer from "./components/Footer";

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
        <CardDuty />
      </section>
      <section>
        <Title
          title="Diversidad de selección"
          subtitle="Explora una amplia gama de opcinoes para cada gusto"
        />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
