import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';

/***
 * USES A DROPDOWN MENU TO DISPLAY A PROMPT AND RESPONSE OPTIONS
 ***/
function Conversation() {
    const [prompt1, setPrompt1] = useState("");
    const [responseA, setResponseA] = useState("");
    const [responseB, setResponseB] = useState("");
    let { id } = useParams();

     useEffect(()=>{
        fetch(`http://localhost:3000/api/conversations/${id}`)
             .then(data => data.json())
             .then(data => {
                 setPrompt1(data.Item["Prompts"].Prompt1.German);
                 setResponseA(data.Item["Prompts"].Prompt1.ResponseA.German);
                 setResponseB(data.Item["Prompts"].Prompt1.ResponseB.German);
             })
             }, [id])
    
    return (
        <Container className="vh-100 d-flex align-items-center justify-content-center">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {prompt1}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item key="ResponseA" href={`/conversations/Antwort1`}>{responseA}</Dropdown.Item>
                    <Dropdown.Item key="ResponseB" href={`/conversations/Antwort1`}>{responseB}</Dropdown.Item>  
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    );
  }
  
  export default Conversation;