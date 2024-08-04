import React from 'react'
import TodoList from './TodoList'
import Form from './Form'
import axios from 'axios'
const URL = 'http://localhost:9000/api/todos'


export default class App extends React.Component {
  state = {
    todos: [],
    errorMessage:""
  }
  //2- Helper Function to fetch (Use Debugger)
  fetchAllTodos = () => {
    axios.get(URL)
    .then(res=>{
      //3- now change state and build the brand new one
      this.setState({...this.state,todos:res.data.data})
    })
    .catch(err=>{
      this.setState({...this.state,errorMessage:err.response.data.message})
    })
  }
  componentDidMount() {
    //1- Fetch All todos
    this.fetchAllTodos()
  }
  render() {

    return (
      <>
      <h2 id='error'>{this.state.errorMessage}</h2>
        <h2>Todos:</h2>
        {/* Now Render Data */}
        {
          this.state.todos.map(td=>{
            return <div key={td.id}>{td.name}</div>
          })
        }

        {/* <TodoList todoList={this.state.todoList} toggleCompletion={this.toggleCompletion} />
        <Form addNewTodo={this.addNewTodo} /> */}
      </>
    )
  }
}
