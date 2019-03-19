import React from 'react'

export default class DisplayTodo extends React.Component {
  constructor(props){
    super(props)
  }
  
  render (){
    return (
      <div className="displayNotes">
        <h2>Display Todo</h2>
        <input type="checkbox" />
          <ul>
            {this.props.todoList.map((todo) =>
              <li key={todo.name}>
                {todo.name}
              </li>
            )}
          </ul>
        <button> delete </button>
      </div>
    )
  }
}
