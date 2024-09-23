// src/ConsultingFirmWebsite.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, Modal, Form } from 'react-bootstrap';
import './ConsultingFirmWebsite.css';

function ConsultingFirmWebsite() {
  const [showSignIn, setShowSignIn] = useState(false); 

  const handleSignInClick = () => {
    setShowSignIn(true); 
  };

  const handleClose = () => {
    setShowSignIn(false); 
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md" className="mb-0">
        <Container>
          <Navbar.Brand href="#">Kodai Consulting Firm</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto navbar-left">
              <Nav.Link href="#">Industries</Nav.Link>
              <Nav.Link href="#">Capabilities</Nav.Link>
              <Nav.Link href="#">Careers</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
            </Nav>

            <div className="navbar-right">
              <input type="text" placeholder="Search..." className="search-bar" />
              <Button variant="outline-light" className="sign-in-btn" onClick={handleSignInClick}>Sign In</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header  >
        <Container>
          <h2 className="display-4" >Welcome to</h2>
          <h1 className="display-4 font-weight-bold" style={{marginTop:'-15px'}}>Kodai Consulting Firm</h1>
          <p className="lead" style={{ width: '50%', text_wrap: 'nowrap'}}>For 30+ years, we have partnered with many of India’s companies and public institutions to create winning strategies and solve some of the most complex problems.</p>
        </Container>
      </header>
      <Container className="my-5">
        <p>
          We work with India's largest companies--helping several become global champions--and with smaller, dynamic ones looking to mobilize change and accelerate sustainable and inclusive growth. 
          We partner with government leaders to help drive growth and build capabilities. Our insights are shaped by leading industry experts, cutting-edge digital and analytics tools, and our decades of experience serving the world’s largest corporations.
        </p>
      </Container>

      <Container>
    <main>
        <Row className="justify-content-center">
            <Col md={4}>
                <Card className="mb-4 shadow-lg border-0">
                <p className="card-img-top2" ></p>
                    <Card.Body className="text-center">
                        <h2 className="card-title">Strategy Consulting</h2>
                        <p className="card-text">We help you define your business strategy to achieve your goals.</p>
                        <Button variant="primary" className="btn-lg">Learn More</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={4}>
                <Card className="mb-4 shadow-lg border-0">
                   <p className="card-img-top1" ></p>
                    <Card.Body className="text-center">
                        <h2 className="card-title">Operations Improvement</h2>
                        <p className="card-text">Enhancing your operational efficiency and effectiveness.</p>
                        <Button variant="primary" className="btn-lg">Learn More</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={4}>
                <Card className="mb-4 shadow-lg border-0">
                    <p className="card-img-top0" ></p>
                    <Card.Body className="text-center">
                        <h2 className="card-title">Technology Solutions</h2>
                        <p className="card-text">Implementing the latest technology to streamline your processes.</p>
                        <Button variant="primary" className="btn-lg">Learn More</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </main>
</Container>
      <section class= "Expert-video">
      <div className="digital-transformation-section text-center py-5">
            <h2 className="section-heading">Harness the Power of Digital</h2>
            <p className="section-content">Views from our experts on driving business transformation across industries.</p>
            <Button variant="light" className="watch-button">
                Watch 
                <i className="fas fa-arrow-right ms-2"></i> 
            </Button>
        </div>
      </section>

      <section>
      <div className="our-people-section text-center py-5">
    <h2>Our People</h2>
    <Row>
        <Col md={4} sm={6} xs={12} className="mb-4">
            <Card className="shadow-lg border-0">
              <p className="card2-img-top0" ></p>
                <Card.Body>
                    <h5 className="person-name">Alice Johnson</h5>
                    <p className="person-role">Senior Consultant</p>
                    <p>Expert in strategic planning and execution with over 10 years of experience.</p>
                </Card.Body>
            </Card>
        </Col>

        <Col md={4} sm={6} xs={12} className="mb-4">
            <Card className="shadow-lg border-0">
            <p className="card2-img-top1" ></p>
                <Card.Body>
                    <h5 className="person-name">Bob Smith</h5>
                    <p className="person-role">Operations Manager</p>
                    <p>Specializes in optimizing processes and improving operational efficiency.</p>
                </Card.Body>
            </Card>
        </Col>

        <Col md={4} sm={6} xs={12} className="mb-4">
            <Card className="shadow-lg border-0">
            <p className="card2-img-top2" ></p>
                <Card.Body>
                    <h5 className="person-name">Charlie Brown</h5>
                    <p className="person-role">Technology Specialist</p>
                    <p>Passionate about leveraging technology to drive business transformation.</p>
                </Card.Body>
            </Card>
        </Col>

        <Col md={4} sm={6} xs={12} className="mb-4">
            <Card className="shadow-lg border-0">
            <p className="card2-img-top3" ></p>
                <Card.Body>
                    <h5 className="person-name">Diana Prince</h5>
                    <p className="person-role">Marketing Director</p>
                    <p>Expert in digital marketing strategies that enhance brand visibility.</p>
                </Card.Body>
            </Card>
        </Col>

        <Col md={4} sm={6} xs={12} className="mb-4">
            <Card className="shadow-lg border-0">
            <p className="card2-img-top4" ></p>
                <Card.Body>
                    <h5 className="person-name">Ethan Hunt</h5>
                    <p className="person-role">Financial Analyst</p>
                    <p>Skilled in financial modeling and analysis to support strategic decisions.</p>
                </Card.Body>
            </Card>
        </Col>

        <Col md={4} sm={6} xs={12} className="mb-4">
            <Card className="shadow-lg border-0">
            <p className="card2-img-top5" ></p>
                <Card.Body>
                    <h5 className="person-name">Fiona Green</h5>
                    <p className="person-role">HR Manager</p>
                    <p>Focused on talent acquisition and employee engagement strategies.</p>
                </Card.Body>
            </Card>
        </Col>

    </Row> 
      </div>
      </section>

      <footer className="bg-dark text-white py-5">
    <Container fluid>
        <Row className="text-center text-md-left">
            <Col md={4} sm={12} className="mb-4 d-flex flex-column align-items-center">
                <h5 className="company-name">Kodai Consulting Firm</h5>
                <p className="company-description">Your trusted partner in consulting services for over 30 years.</p>
            </Col>

            <Col md={4} sm={12} className="mb-4 d-flex flex-column align-items-center">
                <h5 className="subscribe-heading">Subscribe</h5>
                <p className="subscribe-subheading" style={{marginBottom:"10px"}}>Select topics and stay current with our latest insights.</p>
                <div className="d-flex align-items-center flex-wrap justify-content-center">
                    <input type="email" placeholder="Enter your email" className="email-input form-control me-2" style={{marginBottom:"10px"}} />
                    <Button className="submit-btn btn btn-primary">Submit</Button>
                </div>
            </Col>

            <Col md={4} sm={12} className="mb-4 d-flex flex-column align-items-center">
                <h5 className="social-media-heading">Follow Us</h5>
                <div className="social-media-icons mb-3">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a> 
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a> 
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-youtube"></i></a> 
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-twitter"></i></a> 
                </div>  
            </Col>
        </Row>

        <Row className='text-center'>
            <Col sm={12}>
                <ul className="quick-links list-unstyled d-flex justify-content-center flex-wrap"> 
                    <li className="quick-link"><a href="#">Contact Us</a></li>
                    <li className="quick-link"><a href="#">FAQ</a></li>
                    <li className="quick-link"><a href="#">Privacy Policy</a></li>
                    <li className="quick-link"><a href="#">Cookie Preferences</a></li>
                    <li className="quick-link"><a href="#">Terms of Use</a></li>
                    <li className="quick-link"><a href="#">Local Language Information</a></li>
                    <li className="quick-link"><a href="#">Accessibility Statement</a></li>
                </ul>
            </Col>
        </Row>

        <div className='text-center copyright'>
            &copy; 2024 Kodai Consulting Firm. All rights reserved.
        </div>
    </Container>

    {showSignIn && (
        <>
            {<SignInModal show={showSignIn} handleClose={handleClose} />}
        </>
    )}
</footer>

    </div >
  );
}

const SignInModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered size='lg'>
        <Modal.Header closeButton style={{ backgroundColor: '#343a40', color: 'white' }}>
          <Modal.Title>Sign In to Your Account</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ padding: '40px' }}>
          <Form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Control type='email' placeholder='Email' required style={{ marginBottom: '20px', width: '100%' }} />
            </Form.Group>

            <Button variant='primary' type='submit' style={{ width: '40%', marginBottom: '20px' }}>
              Continue
            </Button>


            <Button variant='white' style={{ width: '80%', marginBottom: '10px' ,border: '1px solid #ccc' }}>
              Continue with Apple
            </Button>

    
            <Button variant='white' style={{ width: '80%', marginBottom: '10px' , border: '1px solid #ccc' }}>
              Continue with Google
            </Button>

            <Button variant='white' style={{ width: '80%', border: '1px solid #ccc' }}>
              Continue with LinkedIn
            </Button>

          </Form >
        </Modal.Body>

      </Modal >
    </>
  );
}

export default ConsultingFirmWebsite;