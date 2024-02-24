import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:8000/products", {
      headers: {
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    result = await result.json();
    setProducts(result);
    // console.log(result);
  }

  // console.log(products);
  const deleteProduct = async (id) => {
    console.log(id);
    let result = await fetch(`http://localhost:8000/product/${id}`, {
      method: "delete",
      headers: {
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
      }})
    result = await result.json();
    console.log(result);
    getProducts(0)
  }

  const searchProperties = async (event) => {
    console.log(event.target.value);
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8000/search/${key}`, {
        headers: {
          authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      })
      result = await result.json()
      if (result) {
        setProducts(result)
      }
    } else {
      getProducts()
    }
  }


  return (
    <div className='productlist' >
      <h3> My Properties List </h3>
      <input type='text' className='search' onChange={searchProperties} placeholder="serch properties" />
      {products.map((item, index) => (
        <ul key={index}>
          <div className='plist'><img src={item.img} alt="img" height="120px" width="130px" /></div>
          <div>
            <li>sr.no : {index + 1}</li>
            <li>House Name : {item.name}</li>
            <li>House Description : {item.desc}</li>
            <li>House Manager : {item.manager}</li>
          </div>
          <div className='btn'> <button className='del' onClick={() => { deleteProduct(item._id) }}>delete</button>
            <Link className='up' to={"/update/" + item._id}>Update</Link></div>
        </ul>
      ))}
    </div>
  )
}

export default ProductList
