import './App.css';
import React,{ Component }  from 'react';
import { Route, Routes, Switch } from 'react-router-dom'
import { Header } from './components/Header/Header';
import { LandingPage } from './components/LandingPage/LandingPage';
// import { Error } from './components/Error/Error';

class App extends Component {
  constructor() {
    super()
    this.state = {
      thoughts: []
    }
  }
  
  render(){
    return (
      <container className="App">
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </container>
  )
  
}
}

export default App;
