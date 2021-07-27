import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
function Conversations() {
    const [conversationTopics, setConversationTopics] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/api/conversations")
            .then(data => data.json())
            .then(data => {
                let topics = [];
                data.Items.forEach(item => {
                    topics.push(item);
                })
                setConversationTopics(topics)
            })
    }, [])
    return (
        <Container className="vh-100 d-flex align-items-center justify-content-center">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Choose a topic:
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                    conversationTopics.map(
                        topic => {return <Dropdown.Item key={topic.id} href={`/${topic.id}`}>{topic.Topic.English}</Dropdown.Item>}
                    )
                    }
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    )
  }
  
  export default Conversations;