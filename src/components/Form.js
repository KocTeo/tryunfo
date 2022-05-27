import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick, hasTrunfo } = this.props;
    return (
      <form>
        <label htmlFor="name-input">
          Nome da carta:
          <input
            type="text"
            name="name"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <textarea
            type="text"
            name="description"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          Primeiro Atributo:
          <input
            type="number"
            name="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2-input">
          Segundo Atributo:
          <input
            type="number"
            name="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3-input">
          Terceiro Atributo:
          <input
            type="number"
            name="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input
            type="text"
            name="image"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>
        <select
          value={ cardRare }
          name="rare"
          onChange={ onInputChange }
          data-testid="rare-input"
        >
          Rarity:
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        { hasTrunfo
          ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : (
            <label htmlFor="trunfo-input">
              Super Trunfo
              <input
                type="checkbox"
                name="trunfo"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>)}
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;
