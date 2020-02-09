import React from "react";
import { Card } from "react-bootstrap";

export default function Footer () {
    return (
        <>
            <br />
            <Card bg="dark" text="white" style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title style={{textAlign: 'center'}}>Dark Card Title</Card.Title>
                    <Card.Text style={{textAlign: 'center'}}>
                        <ul style={{listStyleType: 'none'}}>
                            <li> - NodeJS</li>
                            <li> - React</li>
                            <li> - Yarn</li>
                            <li> - Bootstrap</li>
                            <li> - API</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}