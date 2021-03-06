import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../img/logo.png'
import { useState } from 'react'

const Header = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [casesDropdown, setCasesDropdown] = useState(false);

  const enableAboutDropdown = () => {
    setCasesDropdown(false);
    setAboutDropdown(true);
  }

  const enableCasesDropdown = () => {
    setAboutDropdown(false);
    setCasesDropdown(true);
  }

  const disableDropdowns = () => {
    setAboutDropdown(false);
    setCasesDropdown(false);
  }

  return (
    <header>
      <nav onMouseLeave={disableDropdowns}>
        <div className="logo">
          <Link to="/"><img src={logo} alt="logo"/></Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/" onMouseEnter={disableDropdowns}>首页</Link></li>
          <li className="dropdown">
            <Link to="/about" onMouseEnter={enableAboutDropdown}>关于联合资本</Link>
            <div className={`dropdown-menu ${aboutDropdown ? "" : 'hidden'}`} onMouseLeave={disableDropdowns}>
              <HashLink className="dropdown-item" to="/about#concepts">初心与理念</HashLink>
              <HashLink className="dropdown-item" to="/about#team">核心团队</HashLink>
            </div>
          </li>
          <li className="dropdown">
            <li><Link to="/cases" onMouseEnter={enableCasesDropdown}>精选案例</Link></li>
            <div className={`dropdown-menu ${casesDropdown ? "" : 'hidden'}`} onMouseLeave={disableDropdowns}>
              <a className="dropdown-item" href="#">Anova Metals Limited</a>
              <a className="dropdown-item" href="#">Global Lithium</a>
              <a className="dropdown-item" href="#">Global Potash Corporation</a>
            </div>
          </li>
          <li><NavLink activeClassName="is-active" to="/contact" onMouseEnter={disableDropdowns}>联系方式</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
