import React, { Component } from 'react';

import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '.1rem 2rem',
      margin: '.5rem auto',
      width: '50%',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} />
          {title}
          <button onClick={this.props.removeTodo.bind(this, id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const btnStyle = {
  background: 'white',
  border: 'none',
  color: 'red',
  cursor: 'pointer',
  float: 'right',
};

export default TodoItem;
