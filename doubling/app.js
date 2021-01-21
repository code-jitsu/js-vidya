function double() {
    let num =new Number (document.getElementById("d").value)
    let a = 1
    let b = 1 
    answer = []
     for (let index = a + b; index <= num; ) {
         answer.push(index)
         
     }
     document.getElementById("dub").innerHTML=answer
    
}