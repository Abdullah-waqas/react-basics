import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// class Todo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todoInput: '',
//       todos: [{
//         completed: false,
//         text: '1'
//       }, {
//         completed: false,
//         text: '2'
//       }, {
//         completed: false,
//         text: '3'
//       }]
//     };
//     this.toggleComplete = this.toggleComplete.bind(this);
//     this.addTodo = this.addTodo.bind(this);
//   }

//   toggleComplete(todo, index) {
//     var list = [...this.state.todos];
//     list = list.map((todo, i) => {
//       if (Number(index) === Number(i)) {
//         return ({
//           ...todo,
//           completed: !todo.completed,
//         })
//       }
//       return todo;
//     })
//     this.setState({
//       todos: list
//     });
//   }

//   addTodo() {
//     var list = [...this.state.todos, {
//       text: this.state.todoInput,
//       completed: false
//     }];
//     this.setState({
//       todos: list
//     }, () => {
//       this.setState({
//         todoInput: ''
//       })
//     })
//   }

//   render() {
//     return (
//       <div>
//         <input value={this.state.todoInput} onChange={(e) => this.setState({ todoInput: e.target.value })} />
//         <button onClick={this.addTodo}>Add Todo</button>
//         <ul>
//           {this.state.todos.map((todo, index) =>
//             <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} onClick={() => this.toggleComplete(todo, index)} key={index}>{todo.text}</li>)}
//         </ul>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
