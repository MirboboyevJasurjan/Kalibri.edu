import React from 'react';
import classes from './MyHover.module.css'
function MyHover({children}) {
    return (
        <>
            <div className={classes.circle}>
                {children}
                <div className={classes.circle_item}></div>
            </div>
        </>
    );
}

export default MyHover;