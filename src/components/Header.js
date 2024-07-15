import React from "react";
import {CardBody, Card} from "reactstrap";

function header({name, title}){
    return(
        <div>
            <Card>
                <CardBody className= "my-2 bg-warning">
                <h1 className ="text-center ml-5">Welcome to Course Application</h1>
                </CardBody>
            </Card>
            
        </div>
    );
}
export default header;