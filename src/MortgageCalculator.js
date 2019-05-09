import React from 'react';
import { Button, Form, InputGroup, Card, Row, Col } from 'react-bootstrap';
import { createBrowserHistory } from 'history';

class MortgageCalculator extends React.Component {
    constructor(props) {
        super(props);
        
        this.queryString = require('query-string');
        this.history = createBrowserHistory();
        const location = this.history.location;
        const urlParameters = this.queryString.parse(location.search);

        this.state = {
            mortgageAmount: urlParameters.mortgageAmount == null ? 100000 : urlParameters.mortgageAmount,
            interestRate: urlParameters.interestRate == null ? 3.50 : urlParameters.interestRate,
            amortizationPeriod: urlParameters.amortizationPeriod == null ? 25 : urlParameters.amortizationPeriod,
            paymentFrequency: urlParameters.paymentFrequency == null ? "Monthly" : urlParameters.paymentFrequency,
            term: urlParameters.term == null ? 5 : urlParameters.term
        }


        this.handleChangeMortgageAmount = this.handleChangeMortgageAmount.bind(this);
        this.handleChangeInterestRate = this.handleChangeInterestRate.bind(this);
        this.handleChangeAmortizationPeriod = this.handleChangeAmortizationPeriod.bind(this);
        this.handleChangePaymentFrequency = this.handleChangePaymentFrequency.bind(this);
        this.handleChangeTerm = this.handleChangeTerm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeMortgageAmount(event) {
        this.setState({mortgageAmount: event.target.value});
    }
    handleChangeInterestRate(event) {
        this.setState({interestRate: event.target.value});
    }
    handleChangeAmortizationPeriod(event) {
        this.setState({amortizationPeriod: event.target.value});
    }
    handleChangePaymentFrequency(event) {
        this.setState({paymentFrequency: event.target.value});
    }
    handleChangeTerm(event) {
        this.setState({term: event.target.value});
    }
    handleSubmit(event) {
        this.history.push({
            pathname: this.history.location.pathname,
            search: '?' + this.queryString.stringify(this.state)
          });
        event.preventDefault();
    }
    render () {
        return (
            <Row>
                <Col lg="6">
                    <Card>
                        <Card.Body>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group as={Row} controlId="formGridMortgageAmount">
                                    <Form.Label column sm={6}>Mortgage Amount</Form.Label>
                                    <Col sm={6}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>$</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="number" value={this.state.mortgageAmount} onChange={this.handleChangeMortgageAmount}/>
                                        </InputGroup>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formGridInterestRate">
                                    <Form.Label column sm={6}>Interest Rate</Form.Label>
                                    <Col sm={6}>
                                        <InputGroup>
                                            <Form.Control type="number" step="0.01" value={this.state.interestRate} onChange={this.handleChangeInterestRate}/>
                                            <InputGroup.Append>
                                                <InputGroup.Text>%</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formGridAmortizationPeriod">
                                    <Form.Label column sm={6}>Amortization Period</Form.Label>
                                    <Col sm={6}>
                                        <InputGroup>
                                            <Form.Control as="select" value={this.state.amortizationPeriod} onChange={this.handleChangeAmortizationPeriod}>
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
                                            <InputGroup.Append>
                                                <InputGroup.Text>Year(s)</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formGridPaymentFrequency">
                                    <Form.Label column sm={6}>Payment Frequency</Form.Label>
                                    <Col sm={6}>
                                        <Form.Control as="select" value={this.state.paymentFrequency} onChange={this.handleChangePaymentFrequency}>
                                            <option>Weekly</option>
                                            <option>Bi-Weekly</option>
                                            <option>Semi-Monthly</option>
                                            <option>Monthly</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formGridTerm">
                                    <Form.Label column sm={6}>Term</Form.Label>
                                    <Col sm={6}>
                                        <InputGroup>
                                            <Form.Control as="select" value={this.state.term} onChange={this.handleChangeTerm}>
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
                                            <InputGroup.Append>
                                                <InputGroup.Text>Year(s)</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                </Form.Group>
                                <Button type="submit" >
                                    Calculate
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="6">
                    <p>Results</p>
                </Col>
            </Row>
        );
    }
}
export default MortgageCalculator;