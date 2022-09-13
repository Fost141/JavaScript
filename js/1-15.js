"use strict";


// // 9. Переменные и строгий режим "use strict";

// console.log("hello");
// let a = 25; // let изменяемая переменная
// const b = 26; // const константа неизменная переменная (нельзя поменять значение)
// Прямых констант в js не бывает
// console.log(a);
// alert ("Добро пожаловать"); Выводит сообщение на экран
// var - переменная существует еще до того, как она была объявлена и она сразу видна


// // 10. (д) Правила и типы названия переменных

//const vehicleBodyWidth = 5000;
//const vehicleBodyLength = 4000;
//console.log("Ширина и длина кузова автомобиля -  " + "Ширина: " + vehicleBodyWidth + ", длина: " + vehicleBodyLength);

// Style обычно применяются к константам
// snake_case
// UPPER_SNAKE_CASE
// _camelCase
// Kebab-case
// PascalCase


// // 11 Класификация типов данных в JavaScript

// Типы данных JS

// Простые типы 
// Числа 1, 2, 3
// Строки 'string', 'name'
// Логический тип (boolean) - true/false
// null Чего-то просто не существует
// undefined - нет значения
// Symbol
// BigInt

// Объекты

// Спец. объекты
// Массивы [] Является ли массив отдельным типом данных? - Нет, частный случай объекта
// Функции function
// Объект Даты
// Регулярные выражения
// Ошибки

// Простые типы 
//let number = 5.6;

// const = persone = "Alex"; Кавычки без разницы, есть косые кавычки

// const bool = true;

//console.log(something); - null

// let und; - undefined
// console.log(und);

// Объекты
// const obj = {
//     name: "John", // name - ключ, "John" - значение
//     age: 25,
//     isMarried: false
// };

// console.log(obj.isMarried); // Лучше обращаться так
// console.log(obj["isMarried"]);

//МАССИВ (Ключ всегда фиксированный - 0, 1, 2, 3...)
// let arr = ["plum.png", "orange.jpg", 6, "apple.bmp"];
// console.log(arr[0]);


// //12. (д) Разница между объектами и массивами и неочевидные синтаксические возможности

// const arr = ['a', 'b', 'c'];

// arr[4] = 'd'; // Добавление/Изменение значения в массив под определенным номером
// console.log(arr[4]);

// const arrObj = {
//     0: 'a', 
//     a: 'b',
//     2: 'c',
//     abc: {
//         def: {
//             ghi: {
//                 dt: [1, 'gg', 2, 'ff']
//             }
//         }
//     }
// };

// console.log(arrObj.abc.def.ghi.dt[1]);

// const b = 'b';
// arrObj[b] = '1234';
// console.log(arrObj.b);
// console.log(arrObj[b]);

// arrObj.b = '1234';

// console.log(arrObj['b']); // Ключ - строковое значение
// console.log(arrObj.b);

//console.log(arr[0]);
//console.log(arrObj.a); // Через . можно выводить ключи только в строчном формате
// console.log(arrObj['a']); // [] - выводят числовые элементы, а также через кавычки могут и строчные элементы, 
//                           // но лучше всего строчные элементы выводить через .

// const obj = {a: 1, b:2};

// const obj = {
//     Anna: 500,
//     'Alice': 800 // Можно с кавычками и без них
// };

// console.log(obj);

// Задание
// const storeName = 'flex';

// const storeDescription = {
//     budget: 10000,
//     employees: ['Саша', 'Маша', 'Коля'],
//     products: {
//         товар: 'flex-direction',
//         цена: 'space-around'
//     },
//     open: true
// };

// console.log(storeDescription.open);


//13 Простое общение с пользователем
// alert('Hello page');
// const result = confirm('Are you here?'); // confirm работает примерно, как alert,
                                            // но при этом значение передается в переменную
// console.log(result);

// const answer = prompt('Вам есть 18', '18'); // Ввод значения пользователем
// console.log(typeof(answer)); // typeof - обозначает тип данных

// Вся информация, которая приходит от пользователя всегда будет в виде строки (string)

// Запись данных в массив, которые ввел пользователь
// const answers = [];

// answers[0] = prompt('Name', '');
// answers[1] = prompt('Surname', '');
// answers[2] = prompt('Age', '');

// // console.log(answers[0], answers[1], answers[2]);

// document.write(answers); // Выводит информацию на странице сайта

// console.log(typeof(answers));



// 14 Интерполяция (ES6)
// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';
// alert(`Привет, ${user}`);


// 15 Операторы в JS
// alert('Вычисляем сумму');
// const a = +prompt('Введите перве число', '');
// const b = +prompt('Введите второе число', '');

// console.log(a + b);

// console.log(4 + +'5'); // Унарный плюс +'5'

// Чем отличается префиксная форма от постфиксной формы?
// Постфиксная форма сначала выводит изначальное значение, а потом уже его меняет
// Префиксная форма сразу же выводит измененный результат

// = - Присваивание
// == - Равно, сравнение
// === - строгое сравнение (сравнение типов данных)
// && - и (работает тогда, когда 2 или более подопотных являются правдивыми выражениями )
// || - или (работает тогда, когда хотябы 1 из подопотных является правдивыми выражением )
// ! - оператор отрицания (true == true; !true == false)
// != - неравно
// !== - строгое сравнение по типу int !== str
// Порядок выполнения операторов (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table)
// Побитовые операторы - (https://learn.javascript.ru/bitwise-operators)
// let incr = 10,
//     decr = 10;

// incr++; // Инкремент ++ прибавляет 1; incr++ - Постфиксная форма записи; ++incr - Префиксная форма записи;
// decr--; // Декремент -- вычитает 1; incr-- - Постфиксная форма записи; --incr - Префиксная форма записи;

// console.log(incr);
// console.log(decr);

// console.log(2 * 4 == 18);

// const isChecked = true,
//       isClose = true;

// console.log(isChecked && isClose);

// const isCheckedOne = true,
//       isCloseOne = false;

// console.log(isChecked || isClose);
















