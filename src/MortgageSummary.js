import React from 'react';
import { Card, Table } from 'react-bootstrap';

class MortgageSummary extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);

        var computedInterest = Math.pow(Math.pow((1+(props.interestRate/100/2)),2),(1/props.paymentFrequency))-1;
        console.log(computedInterest);
        var mortgagePayment = (props.mortgageAmount * computedInterest) / (1- Math.pow((1+computedInterest), (-1 * props.amortizationPeriod *props.paymentFrequency)));
        console.log(mortgagePayment);
        var balance = props.mortgageAmount;
        var amortization = [];
        var term = true;
        var interestTotal = 0;  
        var principalTotal = 0; 
        var interestTotalTerm = 0;
        var principalTotalTerm = 0;
        for (var year=1; year<=props.amortizationPeriod; year++) { 
            if (year > term && term) {
                term = false;
                interestTotalTerm = interestTotal;
                principalTotalTerm = principalTotal;
            } 
            for (var month=1; month<=props.paymentFrequency; month++) {
                var interestMonth = balance * computedInterest;
                var principalMonth = mortgagePayment - interestMonth; 
                interestTotal = interestTotal + interestMonth;
                principalTotal = principalTotal + principalMonth;
                balance = balance - principalMonth;
                amortization.push({principalTotal: principalTotal, interestTotal: interestTotal, principalMonth: principalMonth, interestMonth: interestMonth, balance: balance, term: term});
            }
        }

        this.state = {
            numberOfPaymentsTerm: props.term * props.paymentFrequency,
            numberOfPaymentsAmortizationPeriod: props.amortizationPeriod * props.paymentFrequency,
            mortgagePayment: parseFloat(mortgagePayment).toFixed(2),
            interestTotalTerm: parseFloat(interestTotalTerm).toFixed(2),
            principalTotalTerm: parseFloat(principalTotalTerm).toFixed(2),
            interestTotal: parseFloat(interestTotal).toFixed(2),
            principalTotal: parseFloat(principalTotal).toFixed(2),
            totalCostTerm:parseFloat(interestTotalTerm+principalTotalTerm).toFixed(2),
            totalCost:parseFloat(interestTotal+principalTotal).toFixed(2),
            amortization: amortization
        }
        
    }
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
        return (
            <Card>
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
                                <td style={textAlignRight}>{this.state.numberOfPaymentsTerm}</td>
                                <td style={textAlignRight}>{this.state.numberOfPaymentsAmortizationPeriod}</td>
                            </tr>
                            <tr>
                                <td>Mortgage Payment</td>
                                <td style={textAlignRight}>{formatCurrency(this.state.mortgagePayment)}</td>
                                <td style={textAlignRight}>{formatCurrency(this.state.mortgagePayment)}</td>
                            </tr>
                            <tr>
                                <td>Principal Payments</td>
                                <td style={textAlignRight}>{formatCurrency(this.state.principalTotalTerm)}</td>
                                <td style={textAlignRight}>{formatCurrency(this.state.principalTotal)}</td>
                            </tr>
                            <tr>
                                <td>Interest Payments</td>
                                <td style={textAlignRight}>{formatCurrency(this.state.interestTotalTerm)}</td>
                                <td style={textAlignRight}>{formatCurrency(this.state.interestTotal)}</td>
                            </tr>
                            <tr>
                                <td>Total Cost</td>
                                <td style={textAlignRight}>{formatCurrency(this.state.totalCostTerm)}</td>
                                <td style={textAlignRight}>{formatCurrency(this.state.totalCost)}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            
        );
    }
}

export default MortgageSummary;