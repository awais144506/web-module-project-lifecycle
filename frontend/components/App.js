import React from 'react'
import TodoList from './TodoList'
import Form from './Form'
import axios from 'axios'
const URL = 'http://localhost:9000/api/todos'


export default class App extends React.Component {
  state = {
    todos: [],
    errorMessage: "",
    todoNameInput: ""
  }
  resetForm = () => this.setState({ ...this.state, todoNameInput: "" })
  formError = (err) => this.setState({ ...this.state, errorMessage: err.response.data.message })
  //2- Helper Function to fetch (Use Debugger)
  fetchAllTodos = () => {
    axios.get(URL)
      .then(res => {
        //3- now change state and build the brand new one
        this.setState({ ...this.state, todos: res.data.data })
      })
      .catch(this.formError)
  }
  //Change Function
  onChange = e => {
    const { value } = e.target //Always Extraxct the Value
    this.setState({ ...this.state, todoNameInput: value })
  }
  //Helper Function to Post Todo
  postNewTodo = () => {
    axios.post(URL, { name: this.state.todoNameInput })
      .then(res => {
        this.setState({ ...this.state, todos: this.state.todos.concat(res.data.data) })
        this.resetForm()
      })
      .catch(this.formError)
  }
  onSubmit = e => {
    e.preventDefault();
    this.postNewTodo()
  }
  toggleCompleted = id =>{
    axios.patch(`${URL}/${id}`)
    //In Map if todo is not what we want return otherwise replace with patching from server
    .then(res=>{
      this.setState({...this.state,todos:this.state.todos.map(td=>{
        if(td.id!==id) return td
        return res.data.data
      })})
    })
    .catch(this.formError)
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
          this.state.todos.map(td => {
            return <div onClick={()=>this.toggleCompleted(td.id)} key={td.id}>{td.name} {td.completed ? "✔️" : ""}</div>
          })
        }
        <form id='todoForm' onSubmit={this.onSubmit}>
          <input type='text' placeholder='Type todo' value={this.state.todoNameInput} onChange={this.onChange} />
          <input type='submit' />
        </form>
          <button>Clear Completed</button>
        {/* <TodoList todoList={this.state.todoList} toggleCompletion={this.toggleCompletion} />
        <Form addNewTodo={this.addNewTodo} /> */}
      </>
    )
  }
}
