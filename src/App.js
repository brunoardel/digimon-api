import React from 'react';
import Cards from './Cards/Cards'
import { Container, Row, Col } from 'react-bootstrap';

function App () {
    return (
        <>
            <Container>
                <Row>
                    <Cards />
                </Row>         
            </Container>
        </>
    );
}

export default App;
