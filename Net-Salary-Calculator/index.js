let netSalary = function(gross, benefits){
    let payee = function(gross){
        if (gross <= 24000){
          return (gross * 0.1);
        }else if (gross > 24000 && gross <= 32333){
            return(gross * 0.25);
        }else if(gross > 32333){
            return(gross * 0.3);
        }return payee(gross);
    }
    // console.log(payee(gross));
    let nhif = function(gross) {
      let deduction;
    
      if (gross <= 5999) {
        deduction = 150;
      } else if (gross <= 7999) {
        deduction = 300;
      } else if (gross <= 11999) {
        deduction = 400;
      } else if (gross <= 14999) {
        deduction = 500;
      } else if (gross <= 19999) {
        deduction = 600;
      } else if (gross <= 24999) {
        deduction = 750;
      } else if (gross <= 29999) {
        deduction = 850;
      } else if (gross <= 34999) {
        deduction = 900;
      } else if (gross <= 39999) {
        deduction = 950;
      } else if (gross <= 44999) {
        deduction = 1000;
      } else if (gross <= 49999) {
        deduction = 1100;
      } else if (gross <= 59999) {
        deduction = 1200;
      } else if (gross <= 69999) {
        deduction = 1300;
      } else if (gross <= 79999) {
        deduction = 1400;
      } else if (gross <= 89999) {
        deduction = 1500;
      } else if (gross <= 99999) {
        deduction = 1600;
      } else {
        deduction = 1700;
      }
    
      return deduction;
    }
    
    // console.log(nhif(gross)); 
    
    let nssf = function(gross){
        if(gross > 6000){
            return (6000 * 0.06);
        }else if(gross < 6000){
            return (gross)*0.06;
        }return nssf(gross);
    }
    // console.log(nssf(gross))
    console.log('Your Payee is ' + payee(gross));
    console.log('Your NHIF contribution is ' + nhif(gross));
    console.log('Your NSSF contribution is ' + nssf(gross));
    return('Your Net Salary is ' + ((gross + benefits)- (1000 + 1000 + 1000)));
}
console.log(netSalary(50000, 20000));













