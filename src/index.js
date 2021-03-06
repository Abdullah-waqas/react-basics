import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const name = 'john doe';
const Element = <div>hello {name}</div>;

function Welcome(props) {
  return <div>hello {props.name}</div>
}

class WelcomeComponent extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function UserGreeting() {
  return <div>Welcome</div>
}

function GuestGreeting() {
  return <div>Hello</div>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

function Event() {
  // ES6
  // const clickMe = () => {
  //   alert('1');
  // }
  function clickMe() {
    alert('1');
  }
  return <button onClick={clickMe}>Button</button>
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.changeCounter = this.changeCounter.bind(this);
  }

  changeCounter(changeBy) {
    console.log(changeBy)
    this.setState((state, props) => ({
      counter: state.counter + changeBy
    }));
  }

  render() {
    return (
      <div>
        <button onClick={() => this.changeCounter(1)}>+</button>
        <button onClick={() => this.changeCounter(-1)}>-</button>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}



ReactDOM.render(
  // Element,
  // <Welcome name='abc'/>,
  // <Event />,
  // <WelcomeComponent name='abc'/>,
  // <Greeting isLoggedIn={false}/>,
  <Counter />,
  // <Todo />,
  document.getElementById('root')
);
