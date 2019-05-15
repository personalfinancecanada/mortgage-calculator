import React from 'react';
import { Card, Table, ProgressBar } from 'react-bootstrap';

class MortgageSummary extends React.Component {
    render() {
        const formatCurrency = (currencyValue) => {
            return (
                new Intl.NumberFormat('en-CA', { 
                    currency: "CAN",
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                  }).format(currencyValue)
            );
        };
        const textAlignRight = {
            textAlign: 'right'
        };
        const minWidth = {
            minWidth:'50px'
        }
        var items = this.props.data.amortization.map(function (amortizationPeriod, index) {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{Math.round(amortizationPeriod.principalTotal).toLocaleString()}</td>
                    <td>{Math.round(amortizationPeriod.principalMonth).toLocaleString()}</td>
                    <td>
                        <ProgressBar col>
                            <ProgressBar striped variant="success" now={amortizationPeriod.principalMonth/(amortizationPeriod.principalMonth+amortizationPeriod.interestMonth)*100} key={1} />
                            <ProgressBar variant="warning" now={amortizationPeriod.interestMonth/(amortizationPeriod.principalMonth+amortizationPeriod.interestMonth)*100} key={2} />
                        </ProgressBar>
                    </td>
                    <td>{Math.round(amortizationPeriod.interestMonth).toLocaleString()}</td>
                    <td>{Math.round(amortizationPeriod.interestTotal).toLocaleString()}</td>
                    <td>{Math.round(amortizationPeriod.balance).toLocaleString()}</td>
                </tr>
            );
        });
    return (
            <Card.Body>
                <Card.Title>Calculation Summary</Card.Title>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Term</th>
                            <th>Amortization Period</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Number of Payments</td>
                            <td style={textAlignRight}>{this.props.data.numberOfPaymentsTerm}</td>
                            <td style={textAlignRight}>{this.props.data.numberOfPaymentsAmortizationPeriod}</td>
                        </tr>
                        <tr>
                            <td>Mortgage Payment</td>
                            <td style={textAlignRight}>{formatCurrency(this.props.data.mortgagePayment)}</td>
                            <td style={textAlignRight}>{formatCurrency(this.props.data.mortgagePayment)}</td>
                        </tr>
                        <tr>
                            <td>Principal Payments</td>
                            <td style={textAlignRight}>{formatCurrency(this.props.data.principalTotalTerm)}</td>
                            <td style={textAlignRight}>{formatCurrency(this.props.data.principalTotal)}</td>
                        </tr>
                        <tr>
                            <td>Interest Payments</td>
                            <td style={textAlignRight}>{formatCurrency(this.props.data.interestTotalTerm)}</td>
                            <td style={textAlignRight}>{formatCurrency(this.props.data.interestTotal)}</td>
                        </tr>
                        <tr>
                            <td>Balance Remaining</td>
                            <td style={textAlignRight}>{formatCurrency(this.props.data.termBalance)}</td>
                            <td style={textAlignRight}>{formatCurrency(this.props.data.balance)}</td>
                        </tr>
                        <tr>
                            <td>Total Cost</td>
                            <td style={textAlignRight}>{formatCurrency(this.props.data.totalCostTerm)}</td>
                            <td style={textAlignRight}>{formatCurrency(this.props.data.totalCost)}</td>
                        </tr>
                    </tbody>
                </Table>
                <Table striped bordered>
                    <thead>
                        <th>Period</th>
                        <th>Principal Total</th>
                        <th>Principal</th>
                        <th style={minWidth}></th>
                        <th>Interest</th>
                        <th>Interest Total</th>
                        <th>Total Cost</th>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </Table>
            </Card.Body>
        );
    }
}

export default MortgageSummary;