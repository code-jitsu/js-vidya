function odd() {
    let limit =new Number (document.getElementById("limit").value)

    let answer = []
    for (let index = 1; index <= limit; index = index + 2) {
        answer.push(index)
    }

    document.getElementById("odds").innerHTML = answer
}