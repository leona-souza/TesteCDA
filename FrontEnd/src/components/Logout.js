import React from 'react'
import { Button } from "react-bootstrap";

function Logout() {
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href="/";
  }

  return (
    <div className="header__username">
      <div>
        Olá, {sessionStorage.userName}
      </div>
      <div className="header__botao">
        <Button className="btn-secondary" onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  )
}

export default Logout
