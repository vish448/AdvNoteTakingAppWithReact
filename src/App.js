import React, { Component } from 'react'
import './App.css'
import DisplayTodo from './components/DisplayTodo'

class App extends Component {
  constructor (props){
    console.log("Calling Constructor")
    super(props)
    this.state = {
      todos : [
        {
          name : 'ToDo app',
          completed : false
        }
      ]
    }
  }

 addTodo(){
   console.log("Calling Todo",+ this.state.completed)
   this.setState(() => {
     return{
       todos: [
         {
           name:'Test',
           completed: true
         }
       ]
     }
   })
 }

 deleteTodo(){
   console.log("deleteTodo")
 }


  render() {
    console.log("Calling Render")
    return (
      <div className="App">
        <div className="todoForm">
          <h2>Create Todo</h2>
          <input type="text" placeholder= "Todo" value={this.state.value} />
          <button className="Button"
                  onClick={() => this.addTodo()}>
            Submit
          </button>
          <DisplayTodo  todoList = {this.state.todos}/>
        </div>

      </div>
    );
  }
}

export default App;
