import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      image: '',
      attr1: '',
      attr2: '',
      attr3: '',
      rare: 'normal',
      trunfo: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const usedValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: usedValue,
    });
  }

  handleSave = () => {
    this.setState({
      name: '',
      description: '',
      image: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      rare: 'normal',
      trunfo: false,
    });
  }

  handleSaveButton = () => {
    const { name, description, image, attr1, attr2, attr3 } = this.state;
    const max = 90;
    const maxTotal = 210;
    const soma = parseInt(attr1, 10) + parseInt(attr2, 10) + parseInt(attr3, 10);
    if (!name.length) {
      return true;
    }
    if (!description.length) {
      return true;
    }
    if (!image.length) {
      return true;
    }
    if (attr1 > max || attr1 < 0) {
      return true;
    }
    if (attr2 > max || attr2 < 0) {
      return true;
    }
    if (attr3 > max || attr3 < 0) {
      return true;
    }
    if (soma > maxTotal) {
      return true;
    }
    return false;
  }

  render() {
    const { name, description, image, attr1,
      attr2, attr3, rare, trunfo } = this.state;

    return (
      <div>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          isSaveButtonDisabled={ this.handleSaveButton() }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSave }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
