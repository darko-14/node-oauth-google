import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import { Component } from 'react';

class App extends Component{

constructor(){
  super()
  this.state={
    user: JSON.parse(localStorage.getItem('User'))
  }
}


render(){
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={
            this.state.user === null ? <Login /> : <Home user={this.state.user}/>
          } />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
}

export default App;
