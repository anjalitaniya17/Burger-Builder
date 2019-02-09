import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGRIDIENT_PRICE = {
    salad: 0.5,
    meat:  1.3,
    cheese: 0.4,
    bacon: 1.0 

};

class BurgerBuilder extends Component {
   state = {
     ingridients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
     }, 
     totalPrice: 4,
     isPurchable: false,
     purchasing: false,
   }

    updatePruchaseState (ingridients) {
      
      const sum = Object.keys(ingridients).map( igKey =>{
                   return ingridients[igKey];
                     }).reduce((sum,el) => {
             return sum + el;
           }, 0);

      this.setState({isPurchable: sum > 0});
    }

    addIngridientHandler = (type) => {
       let oldCount = this.state.ingridients[type];
       let updatedCount = oldCount +1;
       const updatedIngidients = {
         ...this.state.ingridients
       };
       updatedIngidients[type] = updatedCount;
       const priceAddition = INGRIDIENT_PRICE[type];
       let oldPrice = this.state.totalPrice;
       let newPrice = oldPrice + priceAddition ;

      this.setState({totalPrice: newPrice , ingridients: updatedIngidients});
      this.updatePruchaseState(updatedIngidients);
    }

    removeIngridientHandler = (type) => {
      let oldCount = this.state.ingridients[type];
       if(oldCount <= 0){
         return;
       }

       let updatedCount = oldCount -1;
       const updatedIngidients = {
         ...this.state.ingridients
       };
       updatedIngidients[type] = updatedCount;
       const priceReduction = INGRIDIENT_PRICE[type];
       let oldPrice = this.state.totalPrice;
       let newPrice = oldPrice - priceReduction ;

      this.setState({totalPrice: newPrice , ingridients: updatedIngidients});
      this.updatePruchaseState(updatedIngidients);
    }
    
    purchaseHandler = () => {
      this.setState({purchasing: true})
    }

    purchaseCancleHandler = () => {
      this.setState({purchasing: false})
    } 

    purchaseContinueHandler = () => {
      alert("you continue");
      //this.setState({purchasing: true})
    }

    render() {
       const disabledInfo = {
         ...this.state.ingridients
       }

       for(let key in disabledInfo)
       {
         disabledInfo[key] = disabledInfo[key] <=0
       }
        return (
          <Aux>
            <Burger ingridients={this.state.ingridients} />
             
             <Modal show={this.state.purchasing} modalClosed={this.purchaseCancleHandler}>
               <OrderSummary 
               ingridients = {this.state.ingridients} 
               purchaseCancled={this.purchaseCancleHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.state.totalPrice}/>
             </Modal>
            <BuildControls  
              ingridientAdded = {this.addIngridientHandler}
              ingridientRemoved = {this.removeIngridientHandler}
              disabled = {disabledInfo}
              price = {this.state.totalPrice.toFixed(2)}
              purchasable = {this.state.isPurchable}
              purchased = {this.purchaseHandler}
            />
          </Aux>
        );
    }
}

export default BurgerBuilder;