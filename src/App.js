import React from 'react';
import Cards from './Cards/Cards'
import { Container, Row } from 'react-bootstrap';
import Footer from './Footer/Footer'

function App () {
    return (
        <>
            <Container>
                <Row>
                    <Cards />
                </Row>         
            </Container>
            <Footer />
        </>
    );
}

export default App;
