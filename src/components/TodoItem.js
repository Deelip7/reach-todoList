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
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todos: PropTypes.object.isRequired,
};

export default TodoItem;
