import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    render() {
        return(
            <div className="Todo">
                <input type="checkbox"></input>
                {this.props.description}
            </div>
        );
    }

}

export default Todo;