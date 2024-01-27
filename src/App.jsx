import "./App.css";
import Card from "./components/Card";
import productos from "./data/productos";
import Menu from "./components/Menu";
//import Layout from "./components/Layout";



function App() {
  const listaProducto = productos.map((product) => {
    return <Card title={product.name} description={product.description} />;
  });

  /*const listaProducto = productos.map((product, index) => {
    return <Card key={index} title={product.name} description={product.description} />;
  });*/

  const links = [ //pasar una serie de enlaces como accesorio al Menu Componente
    { id: 1, text: 'Quienes Somos', href: '#somos' },
    { id: 2, text: 'Nuestros Productos', href: '#nuestros-productos' },
    { id: 3, text: 'Contactos', href: '#contactos' },
  ];

  return (

    <div className="App">
      
      <Menu className="menu" links={links} />
      <section id="somos"> <p>Punto Ferretero FCL es una empresa dedicada al suministro de productos y herramientas para la construcción, remodelación y mantenimiento de hogares, empresas y proyectos industriales. Fundada en el año 2010, nuestra empresa ha experimentado un crecimiento constante y se ha convertido en un referente confiable en el sector de la ferretería.</p> </section>      
      <section id="nuestros-productos"> <h1>Categoria de Productos</h1> </section>
      <div className="container">{listaProducto}</div>
      
      <section id="contactos">
        <div className="container">
            <ul>
                <li>✔️ MATRIZ: AV PRINCIPAL S/N Y LOS VERGELES - MACHALA - EL ORO </li>
                <li>✔️ Envianos un WhatsApp 096 xxx xxxx</li>
                <li>✔️ Suscribete a nuestro boletín de promociones</li>
                <li>✔️ Asistencia</li>
            </ul>
        </div>
      </section>

      <footer>
        <div className="container">
            <p>&copy; Punto Ferretero Copyright 2023</p>
        </div>
      </footer>
    </div>
    
  );
}

export default App


