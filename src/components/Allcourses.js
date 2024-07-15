import React,{useState, useEffect, toast} from "react"

import Course from "./Course"
import {Button} from "reactstrap";
import base_url from "./../api/bootapi";
import axios from "axios";

const Allcourses=()=>{
     useState(()=>{
        document.title="All Courses";
     },[]);

const getAllCoursesFromServer=()=>{
    axios.get(`${base_url}/courses`).then(
        (response)=>{
            console.log(response.data);
            setCourses(response.data);
            
        },
        (error)=>{
            console.log(error);
            toast.error("something went wrong");
        }
    );
};
     useEffect(()=>{
        getAllCoursesFromServer();
     },[]);

    const[courses, setCourses]=useState([
        //{title:"React course", description:"This is react"},
        //{title:"Java course", description:"This is java"},
       // {title:"python course", description:"This is phyon"},
    ]);

     const updateCourses=(id)=>{
        setCourses(courses.filter((c)=> c.id !=id));
     }

    return (
     <div>
    <h1><small>AllCourses</small></h1>
    

    {
        courses.length >0 ?
        courses.map((item)=> <Course key={item.id} course={item} update={updateCourses}/>)
        : "No courses"
    }
    </div>

    );
};
export default Allcourses;
