import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItems from './TodoItems'

class App extends Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e){

    var itemArray = this.state.items;

    if(this._inputElement !== ""){
      itemArray.unshift({
          text: this._inputElement.value,
          key: Date.now()
      });
    
    
      this.setState({
        items: itemArray
      });

      this._inputElement.value = "";
    }

    console.log(itemArray);
    e.preventDefault();
  }

  deleteItem(key){
    var filteredItems = this.state.items.filter(function (item){
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to your Todo List</h1>
        </header>
        <p className="App-intro">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
              placeholder="Enter task"></input>
            <button type="submit">Add</button>
          </form>
        </p>
        <TodoItems entries={this.state.items}
                    delete={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
