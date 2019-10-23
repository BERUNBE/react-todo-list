import React from 'react';
import './TodoList.css';
import Todo from '../Todo/Todo.js';
import { connect } from "react-redux";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="TodoList">
                <input type="text" ref="descInput"></input>
                <button onClick={this.addTodo}>add</button>
                <ul>{this.props.todos}</ul>
            </div>
        );
    }
    
    addTodo = () => {
        this.props.dispatch({
            type: "ADDTODO",
            payload: <Todo description={this.refs.descInput.value}/>
        });
    }
}

const mapStateToProps = state => ({
    todos: state.todos
  }); 

connect(mapStateToProps)(TodoList)

export default connect(mapStateToProps)(TodoList);