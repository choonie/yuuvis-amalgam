import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    // this.testFunction = this.testFunction.bind(this);
  }

// async testFunction(){
//     try {
//       const response = await axios.get("https://yuuvis.io/api/dms/objects/5fd32324-9cec-4c45-860d-564790728b6c", { headers: { 
//         "Authorization": "Basic YWRtaW46eVduV3RKSllKR0lJ", "X-ID-TENANT-NAME": "nyc058", "Content-Type": "application/x-www-form-urlencoded" } })
//       console.log(response.data)
//     } catch (e) {
//       console.log(e.message)
//     }

  
//   }



  componentDidMount(){
   
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
