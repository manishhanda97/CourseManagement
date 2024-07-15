import React from "react";
import './App.css';
import { Button, Container, Row, Col } from "reactstrap";
import { ToastContainer,toast}from "react-toastify";
import Home from "./components/Home";
import Header from "./components/Header";
import Course from "./components/Course";
import AddCourse from "./components/AddCourse";
import Menus from "./components/Menus";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Allcourses from "./components/Allcourses";

  function App (){
    return (
  <div>
    <Router>
      
    <ToastContainer/>
    <Header/>
    
    
    
    <Container>
      <Row>
        <Col md={4}><Menus/></Col>
        <Col md={8}>
          <Routes>
          <Route path="/" element ={<Home/>} exact/>
          <Route path="/add-course" element ={<AddCourse/>} exact/>
          <Route path="/view-courses" element ={<Allcourses/>} exact/>
          

          </Routes>
           </Col>
       
      </Row>
    </Container>
    
    </Router>
     </div>
  )
}

export default App;
