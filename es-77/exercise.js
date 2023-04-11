function repeatHello(callback, n) {
    let idle = setInterval(callback, 1000);
    setTimeout(() => clearInterval(idle), 1000 * n);
}

repeatHello(() => console.log('Hello'), 5)
