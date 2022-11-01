import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import classes from './Arrow.module.scss'
function NextArrow(props) {
  const {onClick} = props;
  return (
    <div onClick={onClick} className={classes.nextarrow}>
    <MdOutlineKeyboardArrowRight className={classes.icon}/>
  </div>
  )
}

export default NextArrow