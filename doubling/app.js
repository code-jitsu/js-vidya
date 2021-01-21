function double() {
    let num =new Number (document.getElementById("d").value)
    let answer = []
     for (let index = 1; index <= num;  index = index * 2) {
         answer.push(index)
         
     }
     document.getElementById("dub").innerHTML=answer
    
}