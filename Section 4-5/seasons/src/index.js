import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    //This is the only time we do direct assignment
    this.state = {
      lat: null,
      lon: null,
      errorMessage: ''
    };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // We called setState!!!!!
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
        // Not this.state!!!
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>position: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
