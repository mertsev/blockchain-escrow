import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1>Fintech project</h1>
    <Link to='/seller' activeClassName='page-layout__nav-item--active'>Seller</Link>
    {' · '}
    <Link to='/buyer' activeClassName='page-layout__nav-item--active'>Buyer</Link>
    
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
