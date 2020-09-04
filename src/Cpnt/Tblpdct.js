import React from "react";


const Tblpdct = (props) => {
  
  return (
    
      <center>
          <div>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.Products.map((product) => (
          <tr>
            <td> {product.name} </td>
            <td> {product.category}</td>
            <td> {product.price}</td>
          </tr>
        ))}
      </tbody>
      </div>
      </center>
      
   
  );
};

export default Tblpdct;
