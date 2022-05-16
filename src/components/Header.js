import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const { currentUser, logout } = useAuth();

  useEffect(() => {}, [currentUser]);

  async function handleLogout() {
    try {
      await logout();
    } catch {}
  }
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">HTML Camp</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/quiz">Quiz</Nav.Link>
          <Nav.Link href="/tutorial">Tutorial</Nav.Link>
          {currentUser ? (
            <>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link onClick={handleLogout} href="/">
                Logout
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
