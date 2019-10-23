import React from 'react';
import './TodoList.css';
import Todo from '../Todo/Todo.js';
import { connect } from "react-redux";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            descInput: '',
            descOutput: ''
        };
    }

    render() {
        return(
            <div className="TodoList">
                <input type="text" onChange={this.handleChange}></input>
                <button onClick={this.addTodo}>add</button>
                <ul>{this.props.todos}</ul>
            </div>
        );
    }
    
    addTodo = () => {
        this.props.dispatch({
            type: "ADDTODO",
            payload: <Todo description={this.state.descInput}/>
        });
    }

    handleChange = (event) => {
        this.setState({descInput: event.target.value})
    }

}

const mapStateToProps = state => ({
    todos: state.todos
  }); 

  connect(mapStateToProps)(TodoList)

  export default connect(mapStateToProps)(TodoList);