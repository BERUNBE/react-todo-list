import React from 'react';
import './TodoList.css';
import Todo from '../Todo/Todo.js';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            descInput: '',
            descOutput: '',
            todoList: []
        };
    }

    render() {
        return(
            <div className="TodoList">
                <input type="text" onChange={this.handleChange}></input>
                <button onClick={this.addTodo}>add</button>
                <ul>{this.state.todoList}</ul>
            </div>
        );
    }
    
    addTodo = () => {
        if (this.state.descInput !== '') {
            this.setState({descOutput: this.state.descInput});
            this.state.todoList.push(<Todo description={this.state.descInput}/>);
        }
    }

    handleChange = (event) => {
        this.setState({descInput: event.target.value})
    }

}

export default TodoList;