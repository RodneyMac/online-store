import React from "react";
import {Header} from "./components/Header";
// import {ProductosLista} from "./components/Productos/index";
import "boxicons";
import {BrowserRouter} from "react-router-dom";
import {Paginas} from "./components/Paginas";
import {Dataprovider} from "./context/Dataprovider";
import {Carrito} from "./components/Carrito/index.js"; 

function App() {
  return (
    <Dataprovider>
      <div className="App">
          <BrowserRouter>
            <Header/>
            <Carrito/>
            <Paginas/>
            {/* <ProductosLista/> */}
          </BrowserRouter>
      </div>
    </Dataprovider>
  );
}

export default App;
