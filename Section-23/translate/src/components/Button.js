import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  //Helper method way
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }
  renderButton(color) {
    return (
      <ColorContext.Consumer>
        {color => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>{({ language }) => this.renderSubmit(language)}</LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }

  render() {
    return this.renderButton();
  }
}

export default Button;
