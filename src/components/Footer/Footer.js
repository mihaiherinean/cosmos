import React from 'react'
import classes from './Footer.module.scss'
function Footer() {
  return (
    <footer className={classes.footer}>
        <div className={classes.content}>
            <p className={classes.paragraph}>Copyright COSMOS 2022. All rights reserved.</p>
            <p className={classes.paragraph}>All data and company references are purely fictitious and shouldn’t be confused with real world entities or names.</p>
        </div>
    </footer>
  )
}

export default Footer