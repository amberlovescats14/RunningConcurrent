import React, { Component } from 'react';
import axios from 'axios'
import './Customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    axios.get('/api/customers')
      .then(response => {console.log(response.data)
        this.setState({ customers: response.data  });
      
      })

     
  }

  // componentDidMount() {
  //   fetch('/api/customers')
  //     .then(res => res.json())
  //     .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  // }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
        {this.state.customers.map(customer => 
          <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Customers;
