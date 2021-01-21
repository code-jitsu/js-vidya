function sequence() {
    let number = new Number (document.getElementById("s").value)
    let a = 0, b = 1
    let answer = [0, 1, 1]
    for (let index = a + b; index < number; ) {
        a = b
        b = index
        index = a + b 
        if(index >= number) {
            break;
        }
        answer.push(index)

    }
    document.getElementById("sequ").innerHTML = answer

}