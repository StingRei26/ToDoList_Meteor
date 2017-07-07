import React, { Component, PropTypes } from 'react';

import {Tasks} from '../api/tasks.js'; 
 
// Task component - represents a single todo item
export default class Task extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this.props.task._id, {
      $set: {checked: !this.props.task.checked},
  }); 
}

deleteThisTask() {
Tasks.remove(this.props.task.checked); 
}
  
render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}
 





Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};