import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header({isLoggedIn}) {
  let expand = "md";
  return (
    <>
      <Navbar collapseOnSelect expand={`${expand}`} bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                marginRight: "10%"
              }}
            >
              <img
                src="/system_logos/trekkie.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Logo Trekkie"
                style={{ marginRight: "20%" }}
              />
              Trekkie
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"> 
            <Nav className="me-auto">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Procure por um grupo..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Buscar</Button>
              </Form>
            </Nav>

            { isLoggedIn ?
              <Nav>
                <NavDropdown
                            id={`offcanvasNavbarDropdown-expand-${expand}`} 
                            title= {
                              <div className="pull-left" style={ {display: "flex", alignItems: "center", fontWeight: "bold", flexDirection: "column" }}>
                                <img 
                                  src="/system_logos/user_default_logo.png"
                                  width="40"
                                  height="40"
                                  className="d-inline-block align-top"
                                  alt="Imagem de perfil"
                                />
                                Minha Conta
                              </div>
                            }>
                  <NavDropdown.Item href="/profile">
                    Meu Perfil
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/configs">
                    Configurações
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/">
                    Sair
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            :
              <Nav>
                <NavDropdown
                            id={`offcanvasNavbarDropdown-expand-${expand}`} 
                            title= {
                              <div className="pull-left" style={ {display: "flex", alignItems: "center", fontWeight: "bold", flexDirection: "column" }}>
                                <img 
                                  src="/system_logos/user_default_logo.png"
                                  width="40"
                                  height="40"
                                  className="d-inline-block align-top"
                                  alt="Imagem de perfil"
                                />
                                Minha Conta
                              </div>
                            }>
                  <NavDropdown.Item href="/login">
                    Entrar
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;