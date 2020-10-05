import React from 'react'
import ImageGallery from '../ImageGallery'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import './image-gallery.scss'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './ComicsGallery.scss'
//import Images
import bigger_problem from '../imgReact/bigger_problem.png'
import masks from '../imgReact/masks.png'

class ComicsGallery extends React.Component { 
  constructor(props){
    super (props)

    this.state = {
        comic1: [],
        comic2: [],
        isFetch: true

    }       

}
  componentDidMount(){ 
    fetch('https://xkcd.com/info.0.json')
    .then(response => response.json())
    .then(comicJson => this.setState({comic1: comicJson, isFetch: false}))

    fetch('https://xkcd.com/614/info.0.json')
    .then(response => response.json())
    .then(comicJson => this.setState({comic2: comicJson, isFetch: false}))
    
  }

  
  render() {
    var urls = [this.state.comic1.img, this.state.comic2.img]    
    
    const images = [      
      {
        original: bigger_problem,
        thumbnail: bigger_problem,
        thumbnailLabel: this.state.comic1.title,
        description: this.state.comic1.title +"-"+this.state.comic1.num,
        originalTitle:this.state.comic1.title,
        url: urls[0],
      },
      {
        original: woodpecker,
        thumbnail: woodpecker,
        thumbnailLabel: this.state.comic2.title,
        description: this.state.comic2.title +"-"+this.state.comic2.num,
        originalTitle: this.state.comic2.title,
        url: urls[1],
      },
      
    ];
   
    function handleClick(e) {    
        alert("Has votado con "+e.currentTarget.value+" estrellas")
    }  

    return( 
     
		<Container className = "mainContainer">
	     <Row>
		 
			<Col className = "leftContainer" sm={3}>
				                    
                  <div className="accordion-content">
															<Accordion defaultActiveKey="0">		
																<Card>
																	<Card.Header>
																		<Accordion.Toggle id="accordionToggle" as={Button} variant="link" eventKey="0">
																			<h4>Colección</h4>
																		</Accordion.Toggle>
																	</Card.Header>
																		<Accordion.Collapse eventKey="0">
																			<Card.Body>                                      
																			<ul type="I" className="subList">
																					<li type="I">
																						<a href={this.state.comic1.img} target="_blank" rel="noopener noreferrer" className="MO">{this.state.comic1.title}</a>
																					</li>                                         
                                          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{this.state.comic1.alt}</Tooltip>}>
                                            <span className="d-inline-block">
                                              <Button variant="outline-info" size="sm" disabled style={{ pointerEvents: 'none' }}>
                                                Info
                                              </Button>
                                            </span>
                                          </OverlayTrigger>
                                          
                                         
                                          <br/>
                                          <span>Date: {this.state.comic1.day}/{this.state.comic1.month}/{this.state.comic1.year}</span>
																					<br/>                                        
                                            <form>
                                              <p className="clasify1">
                                                <input id="radio1" type="radio" className="stars" value="5" onClick={handleClick}/>
                                                <label htmlFor="radio1">★</label>
                                                <input id="radio2" type="radio" className="stars" value="4" onClick={handleClick}/>
                                                <label htmlFor="radio2">★</label>
                                                <input id="radio3" type="radio" className="stars" value="3" onClick={handleClick}/>
                                                <label htmlFor="radio3">★</label>
                                                <input id="radio4" type="radio" className="stars" value="2" onClick={handleClick}/>
                                                <label htmlFor="radio4">★</label>
                                                <input id="radio5" type="radio" className="stars" value="1" onClick={handleClick}/>
                                                <label htmlFor="radio5">★</label>
                                              </p>
                                            </form>
                                            <br/>
																					<li>
																						<a  href={this.state.comic2.img} target="_blank" rel="noopener noreferrer" className="MO">{this.state.comic2.title}</a>
																					</li>
                                          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{this.state.comic2.alt}</Tooltip>}>
                                            <span className="d-inline-block">
                                              <Button variant="outline-info" size="sm" disabled style={{ pointerEvents: 'none' }}>
                                                Info
                                              </Button>
                                            </span>
                                          </OverlayTrigger>
                                          <br/>
                                          <span>Date: {this.state.comic2.day}/{this.state.comic2.month}/{this.state.comic2.year}</span>
																						<br/>
                                            <form>
                                              <p className="clasify2">
                                                <input id="radio11" type="radio" className="stars" value="5" onClick={handleClick}/>
                                                <label htmlFor="radio11">★</label>
                                                <input id="radio21" type="radio" className="stars" value="4" onClick={handleClick}/>
                                                <label htmlFor="radio21">★</label>
                                                <input id="radio31" type="radio" className="stars" value="3" onClick={handleClick}/>
                                                <label htmlFor="radio31">★</label>
                                                <input id="radio41" type="radio" className="stars" value="2" onClick={handleClick}/>
                                                <label htmlFor="radio41">★</label>
                                                <input id="radio51" type="radio" className="stars" value="1" onClick={handleClick}/>
                                                <label htmlFor="radio51">★</label>
                                              </p>
                                            </form>
																					
																				</ul>
																			</Card.Body>
																		</Accordion.Collapse>
																</Card>
															</Accordion>                                                                
									</div> 
                  

			</Col>			
			<Col className = "rightContainer" sm={9}>
				<ImageGallery items={images} />
			</Col>
			
		 </Row>		 
		</Container>
	);
  }
}
export default ComicsGallery;
