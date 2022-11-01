import React from 'react'
import classes from './Pack.module.scss';
import BriefIcon from "../../../../icons/briefcase.svg"
import RacketIcon from "../../../../icons/racket.svg"
import LiefIcon from "../../../../icons/lief.svg"
import {MdKeyboardArrowRight} from 'react-icons/md'
function Pack() {
  return (
<div className={classes.pack}>
    <div className={classes.container}>
        <div className={classes.icon}>
        <img src={BriefIcon} alt="briefcase" className={classes.image} />
        <p className={classes.name}>pack</p>
        </div>
        <MdKeyboardArrowRight className={classes.arrow}/>
        <div className={classes.icon}>
        <img src={RacketIcon} alt="racket" className={classes.image} />
        <p className={classes.name}>fly</p>
        </div>
        <MdKeyboardArrowRight className={classes.arrow}/>
        <div className={classes.icon}>
        <img src={LiefIcon} alt="lief" className={classes.image}/>
        <p className={classes.name}>live</p>
        </div>
        <MdKeyboardArrowRight className={classes.arrow}/>
        <div className={classes.enjoy}>
                <h1>ENJOY</h1>
                <p>A NEW WORLD!</p>
        </div>
    </div>
</div>
  )
}

export default Pack