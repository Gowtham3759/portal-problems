import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'IamNEO',
    };
    console.log('Constructor!');
  }

  componentWillMount() {
    console.log('Component Will MOUNT!');
  }

  componentDidMount() {
    console.log('Component Did MOUNT!');
  }

  componentWillReceiveProps(newProps) {
    console.log('Component Will Receive Props!');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component Will UPDATE!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did UPDATE!');
  }

  componentWillUnmount() {
    console.log('Component Will UNMOUNT!');
  }

  handleClick = () => {
    this.setState({ msg: 'Welcome to React' });
  };

  render() {
    console.log('Render!');
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.handleClick}>Change Message</button>
      </div>
    );
  }
}

export default App;
