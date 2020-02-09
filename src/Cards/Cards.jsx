import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
import api from '../Services/api'

class Cards extends Component {
    state = {
        digimons: [{}]
    }

    async componentDidMount () {
        const digimons_api = await api.get('digimon');

        this.setState({
            digimons: digimons_api.data
        })
    }

    render () {
        return (
            <>
                {this.state.digimons.map(digimon =>
                    <Col>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={digimon.img} />
                            <Card.Body>
                                <Card.Title>{digimon.name}</Card.Title>
                                <Card.Text>
                                    {digimon.level}
                                </Card.Text>
                                <Button variant="primary">Ver Digimon</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </>
        );
    }
}

export default Cards;
