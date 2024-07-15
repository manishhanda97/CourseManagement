import React,{useEffect} from "react";
import { Container,Button} from "reactstrap";


const Home = ()=> {
    useEffect(()=>{
        document.title="Home || Learn with Manish"
    })
    return (
        <div className = "text-center">
            <Container className ="p-2 my-2 bg-light rounded">
            
                <h1><strong>Leran code with Manish</strong></h1>
                <p>I am going to make my first front end Application with React</p>
                <Container className= "text-center">
                    <Button color="primary" outline>Start using code </Button>
                </Container>
            </Container>   
        </div>
    )
}
export default Home;
    