import './Home.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class Home extends Component {
    render() {
        return(
            <div>
                <div className="header">
                    <h1>To do App</h1>   
                </div>
                <div className="workArea">
                    <input 
                    type="text" 
                    placeholder="Add to do" 
                    onChange={this.props.onChange}
                    />
                    <button 
                    onClick={this.props.onAddTask}
                    >Add
                    </button>
                </div>
                {/* {console.log('tasks:',this.props.tsks)} */}
                <div className="taskList">
                    <ul>
                        {this.props.tsks.map(tsk => (
                            <li key={tsk.id}>{tsk.task}</li>
                        ))}
                    </ul> 
                </div>
                {console.log(this.props.tsks)}
                {console.log(this.updateInput)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tsks: state.red.tasks
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: (e)=>dispatch({type:actionTypes.ON_CHANGE,toDo:e.target.value}),
        onAddTask: (e)=>dispatch({type:actionTypes.ADD_TASK,toDo:e.target.value})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);