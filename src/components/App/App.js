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

  handleTabClick = step => {
    this.setState(() => ({
      step
    }));
  };

  handleClickNextForm = e => {
    const { step } = this.state;
    this.setState(() => ({
      step: step >= 3 ? 3 : step + 1
    }));
  };

  handleChangeForm = (name, value) => {
    this.setState(() => ({
      [name]: value
    }));
  };

  renderForm = () => {
    switch (this.state.step) {
      case 1:
        return (
          <PersonalForm
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            onChangeForm={this.handleChangeForm}
          />
        );
      case 2:
        return (
          <CardForm
            cardNumber={this.state.cardNumber}
            onChangeForm={this.handleChangeForm}
          />
        );
      case 3:
        return <p data-test="congratulations">Поздравляем!</p>;
      default:
        return (
          <PersonalForm
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            onChangeForm={this.handleChangeForm}
          />
        );
    }
  };

  isFormCommitable = () => {};

  render() {
    const isSelected = number => {
      if (number === this.state.step) {
        return true;
      }
      return false;
    };
    const isClickable = number => {
      if (number < this.state.step) {
        return true;
      }
      return false;
    };
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
              <Step
                key={number}
                number={number}
                onClick={this.handleTabClick}
                isClickable={isClickable(number)}
                isSelected={isSelected(number)}
              >
                {title}
              </Step>
            );
          })}
        </div>
        <div className="form-content" />
        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={!this.isFormCommitable()}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
