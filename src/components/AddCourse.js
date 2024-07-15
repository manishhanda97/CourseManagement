import React, { Fragment, useEffect,useState } from "react";
import { Form, FormGroup, Input, Label, Button, Container } from "reactstrap";  // Import Label as well
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
const AddCourse = () => {
    useEffect(()=> {
        document.title="Add courses"
    });
const [course, setCourse]=useState({});

const handleForm =(e)=>{
  console.log(course);
 postDatatoServer(course);
  e.preventDefault();
};

const postDatatoServer=(data)=>{
   axios.post(`${base_url}/courses`, data).then (
    (response)=>{
      console.log(response);
      toast.success("course added");
      setCourse({id:"", title:"",description:""});
    },
    (error)=>{
     console.log(error);
     console.log("error");
    }
   )
}


  return (
    <Fragment>
      <h1 className ="text-center" >Fill Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label for="courseId">Course ID</Label>  
          <Input 
            type="text" 
            placeholder="Enter here" 
            name="courseId" 
            id="courseId" 
            onChange={(e)=>{
              setCourse({...course,id:e.target.value})
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Course title</Label>  {/* Updated to Label */}
          <Input 
            type="text" 
            placeholder="Enter title here " 
            name="title" 
            id="title" 
            onChange={(e)=>{
              setCourse({...course,title:e.target.value})
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Course description</Label>  {/* Updated to Label */}
          <Input 
            type="textarea" 
            placeholder="Enter description here" 
            name="description" 
            id="description" 
            style = {{height:100}}
            onChange={(e)=>{
              setCourse({...course,description:e.target.value})
            }}
          />
        </FormGroup>
        <Container className ="text-center">
        <Button type ="submit" color="success">Add Course</Button>
        <Button type="reset" color="warning ml-2"
        onClick ={(e)=>{
          setCourse({id:"", title:"",description:""});
        }}
        >Reset</Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
