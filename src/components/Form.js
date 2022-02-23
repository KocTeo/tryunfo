import React, { Component } from 'react';
import Inputs from './Inputs';

class Form extends Component {
  render() {
    return (
      <form>
        <Inputs
          dataTestid="name-input"
          type="text"
          name="nome"
          description="Nome da carta"
        />
        <label htmlFor="card-description">
          Descrição da carta
          <textarea data-testid="description-input" id="card-description" />
        </label>
        <Inputs
          dataTestid="attr1-input"
          type="number"
          name="attr1"
          description="Atributo 1"
        />
        <Inputs
          dataTestid="attr2-input"
          type="number"
          name="attr2"
          description="Atributo 2"
        />
        <Inputs
          dataTestid="attr3-input"
          type="number"
          name="attr3"
          description="Atributo 3"
        />
        <Inputs
          dataTestid="image-input"
          type="text"
          name="image-url"
          description="URL da imagem"
        />
        <label htmlFor="rarity">
          Qual a raridade de sua carta?
          <select data-testid="rare-input" id="rarity">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <Inputs
          dataTestid="trunfo-input"
          type="checkbox"
          name="superTrunfo"
          description="Super Trunfo"
        />
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
