import React, {Component} from 'react'
import classes from './App.module.css'
import About from './About/About'
import Cars from './Cars/Cars'
import {Route, Routes, Link} from 'react-router-dom'

class App extends Component {
  render() {

    return (
      <div>
        <nav className={classes.nav}>
          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/cars">Cars</Link>
            </li>

          </ul>
        </nav>

        <hr/>

        <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/cars' element={<Cars/>} />
        </Routes>

      </div>
    );
  }
}

export default App
