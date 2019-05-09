import React from 'react';
import { Button, Form, FormControl, InputGroup, Card, Row, Col } from 'react-bootstrap';

class MortgageCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 1
        }
    }
    render () {
        console.log(this.props);
        return (
            <Row>
                <Col sm="6">
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group as={Row} controlId="formGridMortgageAmount">
                                    <Form.Label column sm={4}>Mortgage Amount</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control defaultValue="100000"/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formGridInterestRate">
                                    <Form.Label column sm={4}>Interest Rate</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control defaultValue="3.50"/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formGridAmortizationPeriod">
                                    <Form.Label column sm={4}>Amortization Period</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control as="select" defaultValue="25">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>
                                            <option>20</option>
                                            <option>21</option>
                                            <option>22</option>
                                            <option>23</option>
                                            <option>24</option>
                                            <option>25</option>
                                            <option>26</option>
                                            <option>27</option>
                                            <option>28</option>
                                            <option>29</option>
                                            <option>30</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formGridPaymentFrequency">
                                    <Form.Label column sm={4}>Payment Frequency</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control as="select" defaultValue="Monthly">
                                            <option>Weekly</option>
                                            <option>Bi-Weekly</option>
                                            <option>Semi-Monthly</option>
                                            <option>Monthly</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formGridTerm">
                                    <Form.Label column sm={4}>Term</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control as="select" defaultValue="5">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Button type="submit">
                                    Calculate
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm="6">
                    <p>Results</p>
                </Col>
            </Row>
        );
    }
}
export default MortgageCalculator;