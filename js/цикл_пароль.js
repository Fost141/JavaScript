for (let i = 0; i < 3; i++) {
    let pass = prompt('Введите пароль', '');
    if (pass == 144) {
        console.log('Добро пожаловать!');
        break;
    } else {
        console.log('Неверный пароль, введите еще раз');
    }
}