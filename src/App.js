import React, { Component } from 'react';
import './App.css';
import routes from './routes.js';
import NavBar from './components/NavBar/NavBar.jsx';


class App extends Component {
  
  // login = ()=>{
  //   const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback');
  //   const url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
  //   window.location = url;
  // }


  render(){
    // console.log(this.props)
    return (
      <div className="App">
      {/* <button onClick={this.login}>Login</button> */}
      {/* <Couches /> */}
        <NavBar />
      {routes}
      </div>
    );
  }
}

export default App;
