import React, { Component } from 'react'
import {Row, Col, Tooltip, OverlayTrigger} from 'react-bootstrap';

export default class TaxesFees extends Component {
    render() {
        return (
            <Row className="show-grid">
                <Col md={6}>Est Taxes and Fees based on 456789</Col>
                <Col md={6}>{`$${this.props.taxes}`}</Col>
            </Row>
        )
    }
}
