function calculateBillTotal(TotalMeal){
    Tax = TotalMeal * 0.095;
    Tip = TotalMeal * 0.2;
    Total = Tax + Tip;
    TotalCost = TotalMeal + Tax + Tip
    return(TotalCost);
}

console.log(calculateBillTotal(50));
