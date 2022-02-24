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
      saveButtonDisable: true,
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
    console.log('oieee');
  }

  render() {
    const { name, description, image, attr1,
      attr2, attr3, rare, trunfo, saveButtonDisable } = this.state;

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
          isSaveButtonDisabled={ saveButtonDisable }
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
