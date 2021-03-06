import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxilary';
import Backdrop from '../Backdrop/Backdrop';

const model = (props) => (
<Aux>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div className={classes.Modal}
      style = {{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '0.9' : '0'
      }}
    >
        {props.children}
    </div>
 </Aux>
);

export default model;