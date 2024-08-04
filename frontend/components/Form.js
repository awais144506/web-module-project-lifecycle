import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      todoName: ""
    }
  }
  onChnage = e => {
    this.setState({ ...this.state, todoName: e.target.value })
  }
  onSubmit = e => {
    e.preventDefault()
    this.props.addNewTodo(this.state.todoName)
    this.setState({ todoName: "" })
  }
  render() {
    return (
      <>
        <form id='todoForm' onSubmit={this.props.onSubmit}>
          <input
            type='text'
            placeholder='Type todo'
            value={this.props.todoNameInput}
            onChange={this.props.onChange}
          />
          <input
            type='submit'
          />
        </form>
        <button
          onClick={this.props.toggleDisplayCompleted}>
          {this.props.displayCompleted ? "Hide" : "Show"}Completed
        </button>
      </>
    )
  }
}
