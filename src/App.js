  import React, {Component} from 'react';
import {CardList}  from './components/card-list/card-list.component'
import { SearchBox} from './components/search-box/search-box.component'
import './App.css'

class App extends Component {
  state={
    monsters: [],
    searchField: ''
  }

  async componentDidMount(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    const monsters =await res.json()
    this.setState({ monsters})
  }
  
  handleChange=(e)=>{
     this.setState({ searchField: e.target.value })
  }

  
  render(){
    const { monsters, searchField, handleChange}=this.state
    const filteredMonsters = monsters.filter(monster=> monster.name.toLowerCase().includes(searchField))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
