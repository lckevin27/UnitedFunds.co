import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../img/logo.png'
import { useState } from 'react'

const Header = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [casesDropdown, setCasesDropdown] = useState(false);
  const [stratDropdown, setStratDropdown] = useState(false);

  const enableDropdown = (dropdown: string) => {
    disableDropdowns();

    if(dropdown === 'about') setAboutDropdown(true);
    if(dropdown === 'cases') setCasesDropdown(true);
    if(dropdown === 'strat') setStratDropdown(true);
  }

  const disableDropdowns = () => {
    setAboutDropdown(false);
    setCasesDropdown(false);
    setStratDropdown(false);
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
            <Link to="/about" onMouseEnter={() => enableDropdown('about')}>关于联合资本</Link>
            <div className={`dropdown-menu ${aboutDropdown ? "" : 'hidden'}`} onMouseLeave={disableDropdowns}>
              <HashLink className="dropdown-item" to="/about#concepts">初心与理念</HashLink>
              <HashLink className="dropdown-item" to="/about#team">核心团队</HashLink>
            </div>
          </li>
          <li className="dropdown">
            <li><Link to="/strategies" onMouseEnter={() => enableDropdown('strat')}>投资策略</Link></li>
            <div className={`dropdown-menu ${stratDropdown ? "" : 'hidden'}`} onMouseLeave={disableDropdowns}>
              <HashLink className="dropdown-item" to="/strategies#advantages">矿业投资的特点</HashLink>
              <HashLink className="dropdown-item" to="/strategies#our-strategies">联合资本的投资策略</HashLink>
            </div>
          </li>
          <li className="dropdown">
            <li><Link to="/cases" onMouseEnter={() => enableDropdown('cases')}>精选案例</Link></li>
            <div className={`dropdown-menu ${casesDropdown ? "" : 'hidden'}`} onMouseLeave={disableDropdowns}>
              <HashLink className="dropdown-item" to="/cases#AML">Anova Metals Limited</HashLink>
              <HashLink className="dropdown-item" to="/cases#GL">Global Lithium</HashLink>
              <HashLink className="dropdown-item" to="/cases#GPC">Global Potash Corporation</HashLink>
            </div>
          </li>
          <li><NavLink activeClassName="is-active" to="/contact" onMouseEnter={disableDropdowns}>联系方式</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
