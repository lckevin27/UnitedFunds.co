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

  const [showSideNav, setSideNav] = useState(false);

  const openNav = () => {
    document.body.style.overflow = "hidden";
    setSideNav(true);
  }

  const closeNav = () => {
    document.body.style.overflow = "visible";
    setSideNav(false);
  }

  return (
    <header>
      <nav onMouseLeave={disableDropdowns}>
        <div className="logo">
          <Link to="/"><img src={logo} alt="logo"/></Link>
        </div>
        <div className="overlay" style={ showSideNav ? { width: '100%'} : { width: '0' }} onClick={ closeNav }></div>
        <ul className="side-nav" style={ showSideNav ? { width: '350px', maxWidth: '75%' } : { width: '0' } }>
          <li><a href="javascript:void(0)" onClick={ closeNav }>&#10005;</a></li>
          <li><Link to="/" onClick={ closeNav }>首页</Link></li>
          <li className="dropdown">
            <Link to="/about" onClick={ closeNav }>关于联合资本 &#9660;</Link>
            <div className={`dropdown-menu`}>
              <HashLink className="dropdown-item" to="/about#concepts" onClick={ closeNav }>初心与理念</HashLink>
              <HashLink className="dropdown-item" to="/about#team" onClick={ closeNav }>核心团队</HashLink>
            </div>
          </li>
          <li className="dropdown">
            <Link to="/strategies" onClick={ closeNav }>投资策略 &#9660;</Link>
            <div className={`dropdown-menu`}>
              <HashLink className="dropdown-item" to="/strategies#advantages" onClick={ closeNav }>矿业投资的特点</HashLink>
              <HashLink className="dropdown-item" to="/strategies#our-strategies" onClick={ closeNav }>联合资本的投资策略</HashLink>
            </div>
          </li>
          <li className="dropdown">
            <Link to="/cases" onClick={ closeNav }>精选案例 &#9660;</Link>
            <div className={`dropdown-menu`}>
              <HashLink className="dropdown-item" to="/cases#AML" onClick={ closeNav }>Anova Metals Limited</HashLink>
              <HashLink className="dropdown-item" to="/cases#GL" onClick={ closeNav }>Global Lithium</HashLink>
              <HashLink className="dropdown-item" to="/cases#GPC" onClick={ closeNav }>Global Potash Corporation</HashLink>
            </div>
          </li>
          <li><Link to="/contact" onClick={ closeNav }>联系方式</Link></li>
        </ul>
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
            <Link to="/strategies" onMouseEnter={() => enableDropdown('strat')}>投资策略</Link>
            <div className={`dropdown-menu ${stratDropdown ? "" : 'hidden'}`} onMouseLeave={disableDropdowns}>
              <HashLink className="dropdown-item" to="/strategies#advantages">矿业投资的特点</HashLink>
              <HashLink className="dropdown-item" to="/strategies#our-strategies">联合资本的投资策略</HashLink>
            </div>
          </li>
          <li className="dropdown">
            <Link to="/cases" onMouseEnter={() => enableDropdown('cases')}>精选案例</Link>
            <div className={`dropdown-menu ${casesDropdown ? "" : 'hidden'}`} onMouseLeave={disableDropdowns}>
              <HashLink className="dropdown-item" to="/cases#AML">Anova Metals Limited</HashLink>
              <HashLink className="dropdown-item" to="/cases#GL">Global Lithium</HashLink>
              <HashLink className="dropdown-item" to="/cases#GPC">Global Potash Corporation</HashLink>
            </div>
          </li>
          <li><NavLink activeClassName="is-active" to="/contact" onMouseEnter={disableDropdowns}>联系方式</NavLink></li>
          <li className="open-nav" >
            <a href="javascript:void(0)" onClick={ openNav }>
              <div></div>
              <div></div>
              <div></div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
