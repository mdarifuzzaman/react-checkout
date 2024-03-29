import React from 'react';
import {Grid} from 'react-bootstrap'
import './App.css';
import SubTotal from './components/SubTotal/SubTotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      total: 100,
      pickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0
    }
  }

  render(){
    return (
    <div className="container">
      <Grid className="purchase-card">
        <SubTotal price={this.state.total.toFixed(2)}/>
        <PickupSavings price={this.state.pickupSavings} />
        <TaxesFees taxes={this.state.taxes.toFixed(2)} />
        <hr></hr>
        <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
        <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
        <hr />
      </Grid>
    </div>
  );
  }
}

export default App;
