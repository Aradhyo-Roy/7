function calculate(){
    var number_1= Number(document.getElementById("number").value)

    area= number_1*number_1;
    perimeter= 4*number_1

    document.getElementById("a").innerHTML=perimeter;
    document.getElementById("p").innerHTML=area;
}