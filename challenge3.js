//prompting the user for input
let basicSalary = parseFloat(prompt("Enter your basic salary:"));
let benefits = parseFloat(prompt("Enter your benefits:"));
function calculateNetSalary(basicSalary, benefits){
    const grossSalary = basicSalary + benefits;
    function monthlytpayeRates(Ksh){
        if(Ksh < 0 || isNaN)return "Invalid input";
        else if(Ksh <= 24,0o00)return 0.01;
        else if(Ksh >24000 && Ksh <=32333)return 0.25;
        else if(Ksh >32333 && Ksh <=500000)return 0.03;
        else if(Ksh > 500000 && Ksh <=800000)return 0.325;
        else return 0.35;
    }
    function nhifdeduction(Ksh){
        if(Ksh < 0 || isNaN)return "Invalid input";
        else if(Ksh <= 5999)return 150;
        else if(Ksh >5999 && Ksh <=7999)return 300;
        else if(Ksh >7999 && Ksh <=11999)return 400;
        else if(Ksh >11999 && Ksh <=14999)return 500;
        else if(Ksh >14999 && Ksh <=19999)return 600;
        else if(Ksh >19999 && Ksh <=24999)return 750;
        else if(Ksh >24999 && Ksh <=29999)return 850;
        else if(Ksh >29999 && Ksh <=34999)return 900;
        else if(Ksh >34999 && Ksh <=39999)return 950;
        else if(Ksh >39999 && Ksh <=44999)return 1000;
        else if(Ksh >44999 && Ksh <=49999)return 1100;
        else if(Ksh >49999 && Ksh <=59999)return 1200;
        else if(Ksh >59999 && Ksh <=69999)return 1300;
        else if(Ksh >69999 && Ksh <=79999)return 1400;
        else if(Ksh >79999 && Ksh <=89999)return 1500;
        else if(Ksh >89999 && Ksh <=99999)return 1600;
        else return 1700;
    }
    function nssfPensionablePay(Ksh){
        const nssf_deduction = 200;
    }
    // calculating paye
    const paye = grossSalary*monthlytpayeRates;
    //calculating total deductions
    const totalDeductions = paye + nhifdeduction  + nssf_deduction;
    //calculating net salary
    const netSalary = grossSalary - totalDeductions;
    //to display results
    console.log("Gross Salary:", grossSalary);
    console.log("PAYE(Tax):", paye);
    console.log("NHIF Deduction:", nhifdeduction);
    console.log("NSSF Deduction:", nssf_deduction);
    console.log("Total Deductions:", totalDeductions);
    console.log("Net Salary:", netSalary);
}
calculateNetSalary(basicSalary, benefits);
