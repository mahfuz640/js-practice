function explain_callback(name, age, task) {
    console.log('Hello', name)
    console.log('your age', age);
    washHand()
    takeShower()
    task();
}

function washHand() {
    console.log('wash hand with soap')
}

function takeShower() {
    console.log('take shower')
}

explain_callback('Sogir',
    17, washHand)
explain_callback('jogir ', 13, takeShower)