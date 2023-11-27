import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";


const Navbar = () => {
  const navigate = useNavigate();

  const handleBtnHome = (e) => {
    navigate("/home");
  };

  const handleBtnNosotros = (e) => {
    navigate("/nosotros");
  };

  return (
    <NavbarBootstrap expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBootstrap.Brand>OrganizAR</NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleBtnHome}>Home</Nav.Link>
            <Nav.Link onClick={handleBtnNosotros}>Nosotros</Nav.Link>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
};

export default Navbar;
