import React from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button'; 

const orderSummary = (props) => {
    const ingridientSummary = Object.keys(props.ingridients).map(igkey => {
                                  return (
                                      <li key={igkey}> 
                                          <span style={{textTransform:'capitalize'}}> {igkey} </span>: {props.ingridients[igkey]}
                                      </li>
                                  );
    });

   return (
       <Aux>
           <h3>Your Order</h3>
           <p>A delicious burger with following ingridients: </p>
            <ul>
               {ingridientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
            <Button btnType='Danger' clicked={props.purchaseCancled}>CANCEL</Button>
       </Aux>
   );
};

export default orderSummary;