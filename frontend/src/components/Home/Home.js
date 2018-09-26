import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="12" className="text-center">
                        <h1>Seja Bem-vindo(a)</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}