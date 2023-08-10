import React, {useState} from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, CssBaseline} from "@mui/material";
import {AddShoppingCart}  from "@mui/icons-material";
import "./styles.css";
const Product = ({product}) => {
        
  return (
    <>
        <CssBaseline/>
        <Card className="root">
        <CardMedia className="media" image={product.images[2]} title={product.title}/>
        <CardContent >
            <div className="cardContent">  
                <Typography variant='h5' gutterBottom>
                    {product.title}
                </Typography>
                <Typography variant='h5' gutterBottom>
                    {product.price}$
                </Typography>
            </div>
            <Typography variant='body2' color='textSecondary'>{product.description}</Typography>
        </CardContent>
        <CardActions disabled className="cardActions">
            <IconButton aria-label="Add to Cart">
                <AddShoppingCart/>
            </IconButton>
        </CardActions>
    </Card>
    </>
    
  )
}
export default Product;