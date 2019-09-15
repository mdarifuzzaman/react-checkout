import React, { Component } from 'react'
import {Button, Collapse, Well, Media, Row, Col} from 'react-bootstrap';

export default class ItemDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div>
                <Button className="item-details-button" bsStyle="link" onClick={ ()=> this.setState({open: !this.state.open})}>
                    {this.state.open === false ? `See` : `Hide `} item details
                    {this.state.open === false ? ` +`: ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            <Media>
                                <Media.Left>
                                    <img width={100} height={100} alt="thumbnail" src="https://i5.walmartimages.com/asr/47179689-6ddd-4207-a559-f9927488aae5_1.e01e1301dced5dc9e9096bd50f42a624.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"></img>
                                </Media.Left>
                                <Media.Body>
                                    <p>
                                        Essentials by ESS 32 chair and it's really good Chair red.
                                    </p>
                                    <Row className="show-grid">
                                        <Col md={6}>
                                            <strong>{`$${this.props.price}`}</strong>
                                            <br />
                                            <strong className="price-strike">{`$${this.props.price}`}</strong>
                                        </Col>
                                        <Col md={6}>
                                            Qty: 1
                                        </Col>
                                    </Row>
                                </Media.Body>
                            </Media>
                        </Well>
                    </div>
                </Collapse>
            </div>
        )
    }
}
