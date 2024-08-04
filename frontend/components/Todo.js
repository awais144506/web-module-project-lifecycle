import React from 'react'

export default class Todo extends React.Component {
  render() {
    const { id, name, completed } = this.props.todo
    const {toggleCompletion} = this.props
    return (
      <>
        <div onClick={()=>toggleCompletion(id)}>

          <p>{name} {completed && "✓"}</p>
        </div>
      </>
    )
  }
}
