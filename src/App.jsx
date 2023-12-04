import "./App.css";
import Card from "./components/Card";
import productos from "./data/productos";

function App() {
  const listaProducto = productos.map((product) => {
    return <Card title={product.name} description={product.description} />;
  });

  return (

    <div className="App">
      <nav>
        <a href="#somos"> Quienes Somos </a>
        <a href="#nuestros-productos"> Nuestros Productos </a>
        <a href="#contactos"> Contactos </a>
      </nav>
      <section id="somos"> <p>Punto Ferretero FCL es una empresa dedicada al suministro de productos y herramientas para la construcción, remodelación y mantenimiento de hogares, empresas y proyectos industriales. Fundada en el año 2010, nuestra empresa ha experimentado un crecimiento constante y se ha convertido en un referente confiable en el sector de la ferretería.</p> </section>      
      <section id="nuestros-productos"> <h1>Categoria de Productos</h1> </section>
      <div className="container">{listaProducto}</div>
      
      <section id="contactos">
        <div class="container">
            <ul>
                <li>✔️ MATRIZ: AV PRINCIPAL S/N Y LOS VERGELES - MACHALA - EL ORO </li>
                <li>✔️ Envianos un WhatsApp 096 xxx xxxx</li>
                <li>✔️ Suscribete a nuestro boletín de promociones</li>
                <li>✔️ Asistencia</li>
            </ul>
        </div>
      </section>

      <footer>
        <div class="container">
            <p>&copy; Punto Ferretero Copyright 2023</p>
        </div>
      </footer>
    </div>
    
  );
}

export default App


