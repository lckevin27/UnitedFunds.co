import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'

const header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/"><img src={logo} alt="logo"/></Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">首页</Link></li>
          <li><Link to="/about">关于联合资本</Link></li>
          <li><Link to="/cases">精选案例</Link></li>
          <li><Link to="/contact">联系方式</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default header
