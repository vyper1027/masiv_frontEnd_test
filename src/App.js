import React from 'react';
import ComicsGallery from './Pages/ComicsGallery';
import StartPage from './Pages/StartPage';
import logo_masivian from './imgReact/Masivian1.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { MemoryRouter, Switch, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';

class App extends React.Component { 
	
render() {	
  return (
    <div className="App">
      <header className="App-header">        
      </header>
	  
		<MemoryRouter id="wrapper" >
					<Navbar id="nav" expand="sm" bg="dark" variant="dark">              
					   <a href="/App"> <img src={logo_masivian} alt="masiv" style={{width: 100}} /> </a>
						&nbsp; &nbsp; <Navbar.Brand>prueba tecnica masivian  &rarr; </Navbar.Brand>             
						<Nav className="mr-auto" >

						  <LinkContainer to="/ComicsGallery">
							<Nav.Link>Comics</Nav.Link>
						  </LinkContainer>  
						                  
						</Nav>
					</Navbar>			 
							 
					<Container className="pt-3" >
						<Switch>
							
						<Route path="/App" >
							<App /> 
						</Route>
						
						<Route path="/ComicsGallery">
							<ComicsGallery />
						</Route>			 

						</Switch>
						<StartPage />
					</Container>			
		</MemoryRouter>	   
    </div>
	

  );
  
}
}
export default App;
