function factorialize(num) {
    var final = 1;
    for (let i = 1; i <= num; i++) {
        // final = final * i;
        final *= i;
    }
    return final;
}

factorialize(5);
