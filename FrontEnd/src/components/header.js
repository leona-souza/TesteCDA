import React from 'react'
import './style.css'
import { Navbar, Nav } from "react-bootstrap";
import Logout from "./Logout";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <div className="header__separador">
        <div>  
          <Nav>
            {!sessionStorage.userName && 
              <>
                <Nav.Link href="/">Home</Nav.Link >
              </>
            }
            {sessionStorage.userName &&
              <>
                <Nav.Link href="/crimes">Crimes</Nav.Link >
                <Nav.Link href="/status">Status</Nav.Link >
                <Nav.Link href="/users">Usuários</Nav.Link >
              </>
            }
          </Nav>
        </div>
        {sessionStorage.userName && <Logout />}
      </div>
    </Navbar>
  )
}

export default Header
