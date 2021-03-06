import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Nav from './Nav';
// import Footer from './Footer';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Signup from "./Signup";
import Collections from './Collections';
import Profile from './Profile';
import AboutUs from './AboutUs';
import Generator from './Generator'
import UserInfo from './UserInfo';


const mapStateToProps = state => {
	return{ state }
  }

class App extends Component {
  
  render() {
    const special = ({match}) => {
      return <Generator match={match} />
    }
    return (
     <Router>
        <div>
        <Nav/>
          <Route exact path ='/' render={() => <Home />} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/Signup' render={() => <Signup />} />
          <Route path='/collections' render={() => <Collections />} />
          <Route path='/profile' render={() => <Profile />} />
          <Route path='/about' render={() => <AboutUs />} />
          <Route path='/snapbook/:id' component={special} />
          <Route path='/profile/edit' render={() => <UserInfo />} />

        </div>
      </Router>

    );
  }
}

export default connect(mapStateToProps)(App)

// export default connect((state, props) => {
//   return{}
// })(App);
