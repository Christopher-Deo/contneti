import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Nav, Button } from 'react-bootstrap';

const Display = (props) => {


    return (
        <div className='cardComponent'>
            <Card>
                <Card.Header>{props.header}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                    <Nav.Link href={props.theLink}>
                        <Button variant="warning" size='sm'>
                            Generate
                        </Button>
                    </Nav.Link>
                </Card.Body>
            </Card>
        </div>
            )
}

export default Display
