import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { storeType } from "../../redux/reducers/rootReducer";

export default function Header() {
  const _navigate = useNavigate();

  const clickNav = (url: string) => {
    _navigate(url);
  }
  const nameFromStore = useSelector((store: storeType) => {
    return store.userReducer
  })
  return (
    <div className="Header">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">my web</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => { clickNav('home') }}>Home</Nav.Link>
          <Nav.Link as={Link} to="about">about</Nav.Link>
          {nameFromStore.password == '7' ? <Nav.Link as={Link} to="AddUser">AddUser</Nav.Link> : ''}
        </Nav>

      </Navbar>
      <Outlet></Outlet>
    </div>
  )
}


