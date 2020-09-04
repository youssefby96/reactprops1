import React from "react";
import Tblpdct from "./Cpnt/Tblpdct";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const Products = [
    { name: "FIFA 2020", category: "Electronics", price: "100 €" },
    { name: "Samsung A71", category: "Electronics", price: "500 €" },
    { name: "Jeans", category: "Clothes", price: "20 €" },
  ];

  const renderProduct = (Product, index) => {
    return (
      <tr key={index}>
        <td>{Product.name}</td>
        <td>{Product.category}</td>
        <td>{Product.price}</td>
      </tr>
    );
  };

  return (
    
    
    <div className="App">
      <h1>Our Products </h1>
      <br></br>
      <br></br>
      <center>
      <ReactBootStrap.Table striped bordered hover  variant="dark" style={{width:300}} >
      <Tblpdct Products={Products} />
      </ReactBootStrap.Table>
      </center>
    </div>
    
  );
};

export default App;
