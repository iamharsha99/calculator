let s="";
function append(x)
{
    s+=x;
    updateDisplay();
    document.getElementById("error").innerHTML="Created by Harsha";
}
function updateDisplay()
{
    document.getElementById("display").innerHTML=s;
}
function calculate() {
    try {
        s = eval(s) .toString();
        updateDisplay();
    } catch (error) {
        s=""
        updateDisplay();
        document.getElementById("error").innerHTML=error;

    }
}

function clearDisplay()
{
    s="";
    updateDisplay();
}
function backspace()
{
    s=s.slice(0,-1);
    updateDisplay();
}