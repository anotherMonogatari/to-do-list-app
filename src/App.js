import React from 'react';

import { connect } from 'react-redux';

import './main.scss'


function App(props) {
  return (
    <div>
      <h1>To-do List</h1>
      <form name='todoForm'>
        <input type='text' name='todoText'></input>
        <button className='add-btn' type='submit' onClick={props.addTodo}>Add</button>
      </form>
      <button className='sort-btn' onClick={props.sortTodo}>Sort</button>
      <div className='items-container'>
        {props.state.map(item => <p className='list-item' key={item.id} id={item.id}>{item.text} | {item.date.toLocaleString()}
        <button onClick={props.deleteTodo}>Delete</button></p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
 return {
   addTodo: (e) => {
    e.preventDefault();
    if (!document.querySelector('input').value.trim()) {
      return }
     else {
     dispatch({type: 'ADD', payload: document.querySelector('input').value});
     document.querySelector('input').value = '';
     }
    },
   deleteTodo: (e) => {dispatch({type: 'DELETE', payload: e.target.parentNode.id})},
   sortTodo: () => {dispatch({type: 'SORT'})}
 }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
