import React from 'react';
import classes from './MyButton.module.css';
import { BsArrowRight } from 'react-icons/bs';

export default function MyButton({ children }) {
   return (
      <>
         <button className={classes.mybutton}>
            <span className={classes.text}>{children}</span>
            <BsArrowRight className={classes.icon} />
         </button>
      </>
   )
}
