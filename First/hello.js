function greet(name) {
    console.log(`hello ${name}`);
}

function hello() {
    console.log('Hello, world!');
}

function test() {
    console.log('test');
}

module.exports = {
    hello,
    greet
};

// module.exports只能输出一次
// module.exports = test;