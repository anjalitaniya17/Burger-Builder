import React from 'react';
import classes from './Modal.css';

const model = (props) => (
    <div className={classes.Modal}
      style = {{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '0.9' : '0'
      }}
    >
        {props.children}
    </div>
);

export default model;