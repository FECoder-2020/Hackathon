import React, { Component } from "react";
import "./index.css";

export default class CustomerList extends Component {
  
  render() {
    return (
      <div className="mt-75 layout-column justify-content-center align-items-center">
        <section className="layout-row align-items-center justify-content-center">
          <input type="text" className="large" placeholder="Name" data-testid="app-input"/>
          <button type="submit" className="ml-30" data-testid="submit-button">Add Customer</button>
        </section>

        <ul className="styled mt-50" data-testid="customer-list">
          {this.state && this.state.list.map((obj, index) => {
            return <li className="slide-up-fade-in" data-testid={`list-item${index}`} key={`list-item${index}`}></li>
          })}
        </ul>
      </div>
    );
  }
}