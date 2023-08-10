import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Product from "./Product";
import './styles.css'
const Products = () => {
    const [products, setProducts] = useState([]);
    // const [yes, setYes] = useState(false);
    const fetchAllProducts = async () => {
        const response = await fetch("https://dummyjson.com/products?limit=30");
        const json = await response.json();
        await setProducts(json.products);
        console.log(products)
    }
    // const createCart = async (pid) => {
    //     const response = await fetch("https://dummyjson.com/carts/1",{
    //     method: "PUT",
    //     merge: true,
    //     headers:{
    //         'Content-Type' : "application/json"
    //     },
    //     body: JSON.stringify({
    //         userId: 1,
    //         products: [{
    //             id: pid,
    //             quantity: 1,
    //           }],
    //     })
    //     });
    //     const json = await response.json();
    //     console.log(json)
    // }
    useEffect(() => {
        fetchAllProducts();
    }, []);
    return (
        <>
            <Grid container justifyContent="center" spacing="4" style={{marginTop: "4rem"}}>
                {products.map((product) => {
                    return <Grid item key={product.id} xs="9" sm="5" md="4" lg="3">
                        <Product product={product} key={product.id}/>
                    </Grid>
                })}
            </Grid>
        </>
    )
}
export default Products;