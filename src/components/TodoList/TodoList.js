import React from 'react';
import './TodoList.css';
import Todo from '../Todo/Todo.js';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            descInput: 'tae',
            descOutput: ''
        };
    }

    render() {
        let items = [];
        items = this.addTodo(items);
        return(
            <div className="TodoList">
                <input type="text" value={this.state.descInput} onChange={this.handleChange}></input>
                <button onClick={this.setDesc}>add</button>
                {items}
                {console.log(this.state.descOutput)}
            </div>
        );
    }

    addTodo = (items) => {
        if (this.state.descOutput !== '') {
            items.push(<Todo description={this.state.descOutput}/>);
        }
        return items;
    }

    setDesc = () => {
        this.setState({descOutput: this.state.descInput})
    }

    handleChange = (event) => {
        this.setState({descInput: event.target.value})
    }

}

export default TodoList;