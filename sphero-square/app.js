function move() {
    //capture input
    let x = new Number(document.getElementById("x").value)
    let y = new Number(document.getElementById("y").value)
    let moves =new Number(document.getElementById("moves").value)

    //processing+output
    alert ("origin: (" + x + ", " + y + ")")
    alert ("north: (" + x + ", " + (y+moves) + ")")
    alert ("east: (" + (x + moves) + ", " + (y+moves) + ")")
    alert ("south: (" + (x + moves) + ", " + y + ")")
    alert ("west: (" + x + ", " + y + ")")
    
}