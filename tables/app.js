function tables() {
    let multiply =new Number (document.getElementById("multiply").value)

    let answer = []
    for (let index = 0; index <= 100; index = index + multiply) {
        answer.push(index)    
    }
    document.getElementById("table").innerHTML = answer
}
