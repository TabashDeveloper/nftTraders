import React from 'react'
import { Button, NavLink, Dropdown } from 'react-bootstrap'
import logo from '../../assets/images/logo.svg'
import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar = ({connectWallet}) => {
  return (
    <nav className="navbar text-white fixed-top mw-100">
    <div class="container-fluid">
    <img width="190px" src={logo} alt="" />
      
      <div className='d-flex align-items-center'>
      <Link style={{textDecoration:"none", color:"white"}} to="/">Home</Link>
      <Dropdown className="d-inline mx-2" >
        <Dropdown.Toggle  className='bg-transparent border-0' id="dropdown-autoclose-true">
          Trading Center
        </Dropdown.Toggle>

        <Dropdown.Menu >
          <Dropdown.Item href="#"><Link to="/Mytrades">Your Hub & Trades </Link></Dropdown.Item>
          <Dropdown.Item href="#"><Link to="#">Global Deals </Link></Dropdown.Item>
          <Dropdown.Item href="#"><Link to="#">Your To Trade </Link></Dropdown.Item>
          <Dropdown.Item href="#"><Link to="#">Trade Squad NFT </Link></Dropdown.Item>
         
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline mx-2" >
        <Dropdown.Toggle  className='bg-transparent border-0' id="dropdown-autoclose-true">
          More
        </Dropdown.Toggle>

        <Dropdown.Menu >
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
      <div class="d-flex gap-2" role="search">
      <Button className='text-primary bg-white rounded-pill  nav-btn ' variant="outline-primary">Buy Crypto</Button>
      <Button className='text-primary bg-white rounded-pill  nav-btn' variant="outline-primary" onClick={connectWallet}>Connect Wallet</Button>
      </div>
    </div>
  </nav>


  )
}

export default Navbar
