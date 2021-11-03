import React, { useState } from "react";
import Button from "@restart/ui/esm/Button";
import { Col, Container, Modal, Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

const TodoSec = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Container className="todo-sec desktopView">
        <Row>
          <h1 className="todo-heading">To-Do</h1>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col sm={10} md={4} xs={10}>
            
            <Modal.Dialog show={show} className="modal-dialog first" onMouseEnter={() => {
              const bt1 = document.getElementById("bt1")
              bt1.style.background = "#fda510"
              bt1.style.color="white"
              
            }}
            onMouseLeave={() => {
              const bt1 = document.getElementById("bt1")
              bt1.style.background = "white"
              bt1.style.color="#fda510"
            }}>
              <Modal.Header className="modal-header1 " closeButton >
                <Modal.Title style={{fontsize: "10px" }}>Appointments</Modal.Title>
              </Modal.Header>
              <Modal.Header className="modal-header ">
                <Modal.Title className="date-time">
                  <i
                    style={{ color: "#6FA1FF" }}
                    class="far fa-calendar-alt"
                  ></i>
                  <strong> 07/07/2021</strong>
                  <br />
                  <i style={{ color: "#6FA1FF" }} class="far fa-clock"></i>
                  <strong> 9:00AM</strong>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className="modal-body">
                <p>
                  Your appointment with John Smithn is confirmed for
                  <strong> Wednesday,July</strong> at <strong>9:00AM</strong>.
                  You can prepare by reviewing your appointment details.
                </p>
              </Modal.Body>

              <Button className="modal-button" variant="primary" id="bt1">
                View appointment details
              </Button>
            </Modal.Dialog>
            
          </Col>
          <Col xs={10} sm={6} md={4}>
            <Modal.Dialog show={show} className="modal-dialog second"  onMouseEnter={() => {
              const bt2 = document.getElementById("bt2")
              bt2.style.background = "#fda510"
              bt2.style.color="white"
              
            }}
             onMouseLeave={() => {
              const bt2 = document.getElementById("bt2")
              bt2.style.background = "white"
              bt2.style.color="#fda510"
            }}>
              <Modal.Header   className="modal-header1" closeButton>
                <Modal.Title>Doctor's Orders</Modal.Title>
              </Modal.Header>
              <Modal.Header className="modal-header ">
                <Modal.Title className="date-time">
                  <i
                    style={{ color: "#6FA1FF" }}
                    class="far fa-calendar-check"
                  ></i>
                  <strong> Well-Visit Anual Checkup</strong>
                  <br />
                  <i style={{ color: "#6FA1FF" }} class="far fa-clock"></i>
                  <strong> 07/07/2021</strong>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className="modal-body">
                <div className="d-flex align-items-start">
                  <i
                    style={{ color: "#00AD53" }}
                    class="fas fa-check-circle"
                  ></i>
                  <p>
                    Keep arm alevated and alternate heat and ie for 48 hours
                  </p>
                </div>
                <div className="d-flex align-items-start">
                  <i
                    style={{ color: "#00AD53" }}
                    class="fas fa-check-circle"
                  ></i>
                  <p>
                    Return for suture removal on <strong>10/07/21</strong>. Be
                    careful to keep the area clean to minimize risk of
                    infecti...
                  </p>
                </div>
              </Modal.Body>

              <Button className="modal-button" variant="primary" id="bt2">
                View all Doctor's Orders
              </Button>
            </Modal.Dialog>
          </Col>

          <Col xs={10} sm={6} md={4}>
            <Modal.Dialog show={show} className="modal-dialog third" onMouseEnter={() => {
              const bt3 = document.getElementById("bt3")
              bt3.style.background = "#fda510"
              bt3.style.color="white"
              
            }}
             onMouseLeave={() => {
              const bt3 = document.getElementById("bt3")
              bt3.style.background = "white"
              bt3.style.color="#fda510"
            }}>
              <Modal.Header className="modal-header1" closeButton>
                <Modal.Title>Tasks</Modal.Title>
              </Modal.Header>
              <Modal.Header className="modal-header ">
                <Modal.Title className="date-time">
                  <span class="badge-icon">3</span>
                  <strong> Time-sensitive tasks to review</strong>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className="modal-body">
                <div className="d-flex align-items-start">
                  <i
                    style={{ color: "#00AD53" }}
                    class="fas fa-check-circle"
                  ></i>
                  <p>Upload copies of your most recent pa stubs.</p>
                </div>
                <div className="d-flex align-items-start">
                  <i
                    style={{ color: "#00AD53" }}
                    class="fas fa-check-circle"
                  ></i>
                  <p>
                    Your upcoming payment is due on <strong>10/07/2021</strong>
                  </p>
                </div>
                <div className="d-flex align-items-start">
                  <i
                    style={{ color: "#00AD53" }}
                    class="fas fa-check-circle"
                  ></i>
                  <p>Respond to a message from Care Concierge.</p>
                </div>
              </Modal.Body>

              <Button className="modal-button" variant="primary" id="bt3" style={{marginTop:"10px"}}>
                Check My Tasks
              </Button>
            </Modal.Dialog>
          </Col>

        </Row>
      </Container>

      <Container className="todo-sec mobView">
        <Accordion>
          
  <Accordion.Item eventKey="0">
    <Accordion.Header>
    <div className="modal-header1 "  >
                <Modal.Title style={{ fontsize: "10px" }}>Appointments</Modal.Title>
                <hr className="hrline" />
              <div style={{marginTop:"15px;"}}>
                  <i style={{ color: "#6FA1FF" }}class="far fa-calendar-alt">
                    <strong style={{ color: "black",fontWeight:"900" }}> 07/07/2021</strong>
                  </i><br />
                  <i style={{ color: "#6FA1FF" }}class="far fa-clock">
                    <strong style={{ color: "black",fontWeight:"900" }}> 9:00AM</strong> </i>
                </div>  
              </div>
             
    </Accordion.Header>
    <Accordion.Body>
              <p style={{ fontSize:"19px"}} >
                  Your appointment with John Smithn is confirmed for
                  <strong> Wednesday,July 7</strong> at <strong>9:00AM</strong>.
                  You can prepare by reviewing your appointment details.
              </p>
            
              <Button className="modal-button-accordion" variant="primary"
                 id="bt1">
                View appointment details
              </Button>
            </Accordion.Body>
             
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header>
    <div className="modal-header1 "  >
                <Modal.Title style={{ fontsize: "10px" }}>Doctor's Orders</Modal.Title>
                <hr className="hrline" />
              <div style={{marginTop:"15px;"}}>
              <i style={{ color: "#6FA1FF" }} class="far fa-calendar-alt"><strong style={{color:"black",fontWeight:"900"}}> Well-Visit Annual Checkup</strong> </i><br/>
              <i style={{ color: "#6FA1FF" }} class="far fa-clock"><strong style={{color:"black",fontWeight:"900"}}>10/13/21</strong> </i>
                </div>  
              </div>
             
    </Accordion.Header>
    <Accordion.Body>
                <div className="d-flex align-items-start">
                  <i
                    
                    class="fas fa-check-circle"
                  ></i>
                  <p >
                    Keep arm alevated and alternate heat and ie for 48 hours
                  </p>
                </div>
                <div className="d-flex align-items-start">
                  <i
                    
                    class="fas fa-check-circle"
                  ></i>
                  <p>
                    Return for suture removal on <strong>10/07/21</strong>. Be
                    careful to keep the area clean to minimize risk of
                    infecti...
                  </p>
                </div>
               <Button className="modal-button-accordion" variant="primary"
                 id="bt1">
                View appointment details
              </Button>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header>
    <div className="modal-header1 "  >
                <Modal.Title style={{ fontsize: "10px" }}>TASKS</Modal.Title>
                <hr className="hrline" />
              <div style={{marginTop:"15px;"}}>
                  <span class="badge-icon" style={{ width: "12px", height:"20px"}}>3</span>
                  <strong style={{ fontWeight:"900"}}> Time-sensitive tasks to review</strong>
                </div>  
              </div>
             
    </Accordion.Header>
    <Accordion.Body>
              <div className="d-flex align-items-start">
                  <i
                    style={{ color: "#00AD53" }}
                    class="fas fa-check-circle"
                  ></i>
                  <p>Upload copies of your most recent pa stubs.</p>
                </div>
                <div className="d-flex align-items-start">
                  <i
                    style={{ color: "#00AD53" }}
                    class="fas fa-check-circle"
                  ></i>
                  <p>
                    Your upcoming payment is due on <strong>10/07/2021</strong>
                  </p>
                </div>
                <div className="d-flex align-items-start">
                  <i
                    style={{ color: "#00AD53" }}
                    class="fas fa-check-circle"
                  ></i>
                  <p>Respond to a message from Care Concierge.</p>
                </div>
               <Button className="modal-button-accordion" variant="primary"
                 id="bt1">
                View appointment details
              </Button>
    </Accordion.Body>
  </Accordion.Item>

</Accordion>
      </Container>
    </>
 );
 };
export default TodoSec;
