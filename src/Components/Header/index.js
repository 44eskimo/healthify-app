import { useNavigate, Link } from 'react-router-dom'

import Healthify from './Healthify.png'
import {Navbar, Nav, NavDropdown, FormControl, Form, Button} from 'react-bootstrap'
import { CiSettings} from 'react-icons/ci'


import './index.css'

const Header = () => {



  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
  }

    return(
        <Navbar bg="success" className='ui fixed menu coloring'  expand="lg">
          <img src={Healthify} className='nav-logo' alt='logo' />
  <Navbar.Brand href="#" className='nav-font'>HEALTHIFY</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0 coloring"
      style={{ maxHeight: '100px'  }}
      navbarScroll
    >
      <Link to="/dashboard">
      <Nav.Link href="#action1" className='nav-font'>Home</Nav.Link>
      </Link>

      <Nav.Link href="#action2" className='nav-font'>Resources</Nav.Link>
      <NavDropdown  id="navbarScrollingDropdown">

        <Link to="/dietplan1">
        <NavDropdown.Item href="#action3">Diet Plan 1</NavDropdown.Item>
        </Link>

        <Link to="/dietplan2">
        <NavDropdown.Item href="#action4">Diet Plan 2</NavDropdown.Item>
        </Link>

        <NavDropdown.Divider />

        <Link to="/morning-routine">
        <NavDropdown.Item href="#action5">Morning Routine</NavDropdown.Item>
        </Link>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        
      </Nav.Link>
    </Nav>
    <Form  className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        
      />
      <Button  className='boot-button  bg-light' >Search</Button>
      <div className='nav-marg'>
      <button className='account-button'>
        <span>< CiSettings size={20} /></span>
        Account</button>
        <NavDropdown  id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Your profile</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Change theme</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5" onClick={logout} >
          
          Log Out</NavDropdown.Item>
      </NavDropdown>

      </div>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Header

