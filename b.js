function finalbill(){
		
    let billamount = parseFloat(document.getElementById("total_bill").value);
    let tip_per = parseFloat(document.getElementById("tip_rate").value);
    
    document.getElementById("tip_cost").innerHTML = "$" + billamount*tip_per/100;
    document.getElementById("tax_cost").innerHTML = "$" + billamount*0.055;
    document.getElementById("grand").innerHTML = "$" + (billamount + (billamount*tip_peres/100) + (billamount*0.055));
    return false;

}