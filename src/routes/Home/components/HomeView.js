import React from 'react'
import { Link } from 'react-router'
/* import DuckImage from '../assets/Duck.jpg' */
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    {/* <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} /> */}
    <span className="btn btn-secondary">
      <Link to="/counter">Click to counter</Link>
    </span>
    <span className="btn btn-default">
      <Link to="/counter">Click to counter</Link>
    </span>
  </div>
)

export default HomeView
