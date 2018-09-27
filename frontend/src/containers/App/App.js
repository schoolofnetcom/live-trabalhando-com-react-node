import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './../../components/Home/Home';
import Header from './../../components/Header/Header';
import BillList from './../../components/Bill/BillList';
import NewBill from './../../components/Bill/NewBill';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/bills" component={BillList}></Route>
            <Route path="/bills/new" component={NewBill}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
