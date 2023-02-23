import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Display = (props) => {

    return (
        <div className='cardComponent my-2'>
            <Card style={{
                height: '23rem'
            }}>
                <Card.Header>{props.header}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>

                </Card.Body>
                <Card.Footer>
                    <div className='d-flex justify-content-center py-2'>
                        <Link to={props.theLink}>
                            <Button
                                className='btn btn-sm btn-outline-dark text-white'
                            >
                                Generate
                            </Button>
                        </Link>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Display;
