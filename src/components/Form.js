import React, { Component } from 'react';
import Inputs from './Inputs';

class Form extends Component {
  render() {
    return (
      <form>
        <Inputs
          dataTestid="name-input"
          type="text"
          description="Nome da carta"
        />
        <label htmlFor="card-description">
          Descrição da carta
          <textarea data-testid="description-input" />
        </label>
        <Inputs
          dataTestid="attr1-input"
          type="number"
          description="Atributo 1"
        />
        <Inputs
          dataTestid="attr2-input"
          type="number"
          description="Atributo 2"
        />
        <Inputs
          dataTestid="attr3-input"
          type="number"
          description="Atributo 3"
        />
        <Inputs
          dataTestid="image-input"
          type="text"
          description="URL da imagem"
        />
        <label htmlFor="rare-input">
          Qual a raridade de sua carta?
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <Inputs
          dataTestid="trunfo-input"
          type="checkbox"
          description="Super Trunfo"
        />
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
