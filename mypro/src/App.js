import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Component  from './Component'
import {Nav,Navbar,NavDropdown,Container, } from 'react-bootstrap'
import {Button,Form} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      
       <Navbar bg="light" expand="lg">
  <Container >
    <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <NavDropdown title="Services" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Backend developement</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">front-end developement</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">fullstack developement</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Contact us</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<header className="App-header">
        <Component />
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Deadline</Form.Label>
          <Form.Control type="Deadline" placeholder="Type your deadline " />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Price</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
       </header>
       <>
       <>
       <div className="mb-2">
  
    <Button variant="secondary" size="lg">
      Submit
    </Button>
  </div>
 
</>
</>
    </div>
    
  );
}


export default App;
