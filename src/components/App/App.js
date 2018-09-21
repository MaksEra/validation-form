import React, { Component } from 'react';
import Step from 'components/Step/Step';
import CardForm from 'components/CardForm/CardForm';
import PersonalForm from 'components/PersonalForm/PersonalForm';

import './App.css';

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };

  render() {
    const tabs = [
      { number: 1, title: 'Personal information' },
      { number: 2, title: 'Card information' },
      { number: 3, title: 'Finish' }
    ];

    return (
      <div className="container">
        <div className="tab-panel">
          {tabs.map(tab => {
            const { number, title } = tab;
            return (
              <Step key={number} number={number}>
                {title}
              </Step>
            );
          })}
        </div>
        <div className="form-content" />
        <div className="button-panel">
          <button className="button-next" onClick="">
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
