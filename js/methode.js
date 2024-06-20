// +++ Метод call +++

// Сигнатура методу call**()** виглядає так:

foo.call(thisArg, arg1, arg2, ...)

// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції

// Метод call викликає функцію foo так, що значення this у функції буде посилатися на об'єкт thisArg,
// і також передає їй аргументи arg1, arg2 тощо.

// Приклад методу 'call'

function greet(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}

const mango = {
  username: "Mango",
	room: 27
};

const poly = {
  username: "Poly",
	room: 191
};

// За допомогою методу 'call' ми можемо викликати функцію 'greet' так, 
// щоб значення 'this' вказувало на потрібний об'єкт 
// і використовувало значення його властивостей.

greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"

// Як правильно за допомогою методу 'call' 
// викликати функцію showName в контексті об’єкта user ?

// Правильно
showName.call(user)

// НЕправильно
// user.call(showName)
// call(showName, user)
// showName().call(user)


// +++ Метод apply() +++

// 'apply' є аналогом методу 'call'
// АЛЕ в методі 'apply()' синтаксис передачі аргументів вимагає масиву '[]'

// Сигнатура методу 'apply**()**' виглядає так:

foo.apply(thisArg, [arg1, arg2, ...])

// thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції.
// arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції.

// Метод apply викликає функцію 'foo' таким чином,
// що значення this у функції буде посилатися на об'єкт 'obj'
// і передасть елементи масиву як окремі аргументи arg1, arg2 тощо.


// Приклад методу 'apply()'

function greet(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}

const mango = {
  username: "Mango",
	room: 27
};

const poly = {
  username: "Poly",
	room: 191
};

greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"
