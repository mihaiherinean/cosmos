
import React from 'react'
import classes from './Arrow.module.scss'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
function PreviousArrow(props) {
    const {onClick} = props;
  return (
    <div onClick={onClick} className={classes.prevarrow}>
        <MdOutlineKeyboardArrowLeft className={classes.icon}/>
    </div>
  )
}

export default PreviousArrow