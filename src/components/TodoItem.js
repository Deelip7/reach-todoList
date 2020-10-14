import React, { Component } from 'react';

import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '.1rem',
      margin: '.5rem auto',
      width: '50%',
      textAlign: 'center',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };
  render() {
    console.log(this.getStyle());
    return (
      <div style={this.getStyle()}>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todos: PropTypes.object.isRequired,
};

export default TodoItem;
