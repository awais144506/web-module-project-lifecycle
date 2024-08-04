import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  state={
    showAll:false
  }
  toggleShowAll = () =>{
    this.setState({...this.state,showAll:!this.state.showAll})
  }
  render() {
    const { todoList ,toggleCompletion} = this.props; 
    console.log(todoList)
    const filtered = todoList.filter(td=>!td.completed || this.state.showAll)
    return (
      <>
        {filtered.map(td => {
          return <Todo key={td.id} todo={td} toggleCompletion={toggleCompletion}/>;
        })}
        <button onClick={this.toggleShowAll}>{this.state.showAll? "Hide Todos" :"Show Todos"}</button>
      </>
    );
  }
}
