import React from "react";
import classes from "./SliderCarousel.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Product from "../Product/Product";
import PreviousArrow from "./components/PreviousArrow";
import NextArrow from "./components/NextArrow";

function SliderCarousel() {
  
  const settings = {
    className: classes.slider,
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    prevArrow: <PreviousArrow/>,
    nextArrow: <NextArrow/>
  };


const sliderProducts = [
  {
    title: "Enceladus",
    description: "is the sixth-largest moon of Saturn. It is about a tenth of Saturn's largest moon, Titan. \n  Explore this amazing cosmic marvel in a safe and fast trip with our aerospace company.".split("\n"),
    price: "999.990 €",
    system: "The Saturn System",
    distance: 9.5,
    population: 3920
  },
  {
    title: "Rhea",
    description: "is the second-largest moon of Saturn. It is about a tenth of Saturn's largest moon, Titan. \n  Explore this amazing cosmic marvel in a safe and fast trip with our aerospace company.".split("\n"),
    price: "999.990 €",
    system: "The Saturn System",
    distance: 9.2,
    population: 3920
  },
  {
    title: "Tethys",
    description: "is the fifth-largest moon of Saturn. It is about a tenth of Saturn's largest moon, Titan. \n  Explore this amazing cosmic marvel in a safe and fast trip with our aerospace company.".split("\n"),
    price: "999.990 €",
    system: "The Saturn System",
    distance: 9.0,
    population: 3920
  },
];
  return (
    <div className={classes.content}>
      <Slider {...settings}>
        {sliderProducts.map((product) => (
          <Product product={product}/>
        ))}
      </Slider>
    </div>
  );
}

export default SliderCarousel;
