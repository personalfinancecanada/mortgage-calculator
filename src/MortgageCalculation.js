export let calculateMortgage = function(mortgageAmount, interestRate,  paymentFrequency, amortizationPeriod, term) {
    var computedInterest = Math.pow(Math.pow((1+(interestRate/100/2)),2),(1/paymentFrequency))-1;
    var mortgagePayment = (mortgageAmount * computedInterest) / (1- Math.pow((1+computedInterest), (-1 * amortizationPeriod *paymentFrequency)));
    var balance = mortgageAmount;
    var termBalance = 0;
    var amortization = [];
    var isTerm = true;
    var interestTotal = 0;  
    var principalTotal = 0; 
    var interestTotalTerm = 0;
    var principalTotalTerm = 0;
    
    for (var year=1; year<=amortizationPeriod; year++) { 
        if (year > term && isTerm) {
            isTerm = false;
            interestTotalTerm = interestTotal;
            principalTotalTerm = principalTotal;
            termBalance = balance;
        } 
        for (var month=1; month<=paymentFrequency; month++) {
            var interestMonth = balance * computedInterest;
            var principalMonth = mortgagePayment - interestMonth; 
            interestTotal = interestTotal + interestMonth;
            principalTotal = principalTotal + principalMonth;
            balance = balance - principalMonth;
            amortization.push({principalTotal: principalTotal, interestTotal: interestTotal, principalMonth: principalMonth, interestMonth: interestMonth, balance: balance, term: term});
        }
    }
    return {
        numberOfPaymentsTerm: term * paymentFrequency,
        numberOfPaymentsAmortizationPeriod: amortizationPeriod * paymentFrequency,
        mortgagePayment: mortgagePayment,
        interestTotalTerm: interestTotalTerm,
        principalTotalTerm: principalTotalTerm,
        interestTotal: interestTotal,
        principalTotal: principalTotal,
        totalCostTerm: interestTotalTerm+principalTotalTerm,
        totalCost: interestTotal+principalTotal,
        termBalance: termBalance,
        balance: balance,
        amortization: amortization
    };
};