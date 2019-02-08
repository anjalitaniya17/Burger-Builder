import React from 'react';
import Aux from '../../../hoc/Auxilary';

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
            <p>Continue to Checkout?</p>
       </Aux>
   );
};

export default orderSummary;