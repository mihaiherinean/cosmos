import React from "react";
import classes from "./Product.module.scss";
import EnceladusImage from '../../../../images/first.png'

function Product({ product }) {
  return (
    <div className={classes.container}>
      <div className={classes.imageDiv}>
        <img className={classes.image} src={EnceladusImage} alt="cosmos" />
      </div>
      <div className={classes.shortdescription}>
        <p>{product.title.toUpperCase()}</p>
        <p>{product.system}</p>
        <p>Distance: {product.distance}</p>
        <p>Population: {product.population}</p>
      </div>
      <div className={classes.info}>
        <p className={classes.title}>{product.title}</p>
        <p className={classes.description}>{product.description[0]}</p>
        <p className={classes.description}>{product.description[1]}</p>
        <div className={classes.ticket}>
          <div className={classes.infoticket}>
            <div>
              <p className={classes.price}>{product.price}</p>
              <p className={classes.priceinfo}>one way ticket</p>
            </div>
            <button className={classes.button}>Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
