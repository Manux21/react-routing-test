import React, {Component} from 'react'
import classes from './App.module.css'
import About from './About/About'
import Cars from './Cars/Cars'
import Home from './Home/Home'
import {Route, Routes, Link} from 'react-router-dom'
import CarDetail from "./CarDetail/CarDetail";

class App extends Component {
  render() {

    return (
      <div>
        <nav className={classes.nav}>
          <ul>

            <li>
              <Link to="/" activeStyle={{color: 'blue'}}>Home</Link>
              {/*activeClassName*/}
              {/*activeStyle*/}
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              {/*<Link to={{*/}
              {/*  pathname:"/cars",*/}
              {/*  search: '?a=1&b=2',*/}
              {/*  hash: 'wfm-hash'*/}
              {/*}}*/}

              <Link to={{
                pathname:"/cars",
              }}
              >Cars</Link>

            </li>

          </ul>
        </nav>

        <hr/>

        <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/cars' element={<Cars/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/cars/:carname' element={<CarDetail/>} />
        </Routes>

      </div>
    );
  }
}

export default App
