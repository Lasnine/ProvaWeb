const Max = () => {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let num = parseInt(document.getElementById("num").value);

    if(num1 >= num2 && num1>=num3)
    {
        num = num1
    }
    else if(num2 >=num1 && num2>=num3)
    {
        num = num2
    }
    else{
        num = num3
    }
}

const Min = () => {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let num = parseInt(document.getElementById("num").value);

    if(num2 <= num1 && num3<=num1)
    {
        num = num1;
    }
    else if(num1 <=num2 && num3<=num2)
    {
        num = num2;
    }
    else{
        num = num3;
    }
}

const Med = () => {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let num = parseInt(document.getElementById("num").value);

    num = (num1+num2+num3)/3
}