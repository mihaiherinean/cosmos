import React from 'react'
import Description from './components/Description/Description';
import Pack from './components/Pack/Pack'
import SliderCarousel from './components/SliderCarousel/SliderCarousel'
import classes from './Content.module.scss';

function Content() {
  return (
    <div className={classes.content}>
    <SliderCarousel />
    <Pack/>
    <Description/>
    </div>
  )
}

export default Content