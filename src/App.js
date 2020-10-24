import React,{ Component } from 'react';
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import axios from 'axios'
import Home from './components/pages/Home'
import Grid from './components/Grid'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  
  state = {
    categories: []
  }

  componentDidMount() {
    axios.get(`https://blooming-thicket-64006.herokuapp.com/https://swapi.dev/api`)
      .then(res => {
        this.setState({ categories:  Object.keys(res.data)});
      }).catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar categories={this.state.categories} />
          <Route exact path='/' component={Home} />
          {
            this.state.categories.map((category) => {
              return <Route path={`/${category}`} render={props => (
                <React.Fragment>
                  <div class="container-fluid mb-5 mt-5" id="GridContainer">
                    <Grid category={category}></Grid>
                  </div>
                </React.Fragment>
              )}></Route>
            })
          }
        </div>
      </Router>
    );
  }
}

export default App;
