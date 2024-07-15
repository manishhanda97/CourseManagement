import axios from "axios";
import React, {useEffect} from "react";
import {
    Card, CardBody, CardTitle,CardSubtitle, CardText,CardFooter, Button,
    Container,
} from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course=({course, update})=>{
  const deleteCourse=(id)=>{
     axios.delete(`${base_url}/courses/${id}`).then(
        (response)=>{
        toast.success("course deleted");
        update(id);
        },
        (error)=>{
         toast.error("course not deleted");
        }
     )
  }


    useEffect(()=>{
        document.title="view courses"
    })
    return (
        <div>
            
        <Card className ="text-center">
                            
            <CardBody>
                
                <CardSubtitle ><strong>{course.title}</strong></CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger me-2"
                    onClick={()=>{
                        deleteCourse(course.id);
                    }}
                    >Delete</Button>
                    <Button color= "warning me-2">Update</Button>
                </Container>
            </CardBody>
            
        </Card>
        </div>
        
    )

}
export default Course;