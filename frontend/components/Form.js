import React from 'react'

export default class Form extends React.Component {
  constructor(){
    super()
    this.state={
      todoName:""
    }
  }
  onChnage = e =>{
    this.setState({...this.state,todoName:e.target.value})
  }
  onSubmit = e =>{
    e.preventDefault()
    this.props.addNewTodo(this.state.todoName)
    this.setState({todoName:""})
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type='text' onChange={this.onChnage} value={this.state.todoName}/>
        <button type='submit'>Add Todo</button>
      </form>
    )
  }
}
