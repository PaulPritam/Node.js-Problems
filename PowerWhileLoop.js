let loop = true;

while (loop) {
    let result = 1;
    for (let i = 1; ; i++) {
        result = result * 2;
        console.log(result);
        if(result == 256) {
            loop = false;
            break;
        }
    }
}
