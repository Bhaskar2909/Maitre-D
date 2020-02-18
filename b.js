btn.addEventListener("click",Bill);
function Bill()
{
		
    let total = parseFloat(document.getElementById("total").value);
    let rate = parseFloat(document.getElementById("rate").value);
    
    document.getElementById("tip").innerHTML = "Tip: $" + total*rate/100;
    document.getElementById("tax").innerHTML = "Tax Value: $" + total*0.055;
    document.getElementById("grandtotal").innerHTML = "Grand Total: $" + (total + (total*rate/100) + (total*0.055));
    

}