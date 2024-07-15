// // +++ Метод call +++

// // Сигнатура методу call**()** виглядає так:

// foo.call(thisArg, arg1, arg2, ...)

// // thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
// // arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції

// // Метод call викликає функцію foo так, що значення this у функції буде посилатися на об'єкт thisArg,
// // і також передає їй аргументи arg1, arg2 тощо.

// // Приклад методу 'call'

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// // За допомогою методу 'call' ми можемо викликати функцію 'greet' так, 
// // щоб значення 'this' вказувало на потрібний об'єкт 
// // і використовувало значення його властивостей.

// greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"

// // Як правильно за допомогою методу 'call' 
// // викликати функцію showName в контексті об’єкта user ?

// // Правильно
// showName.call(user)

// // НЕправильно
// // user.call(showName)
// // call(showName, user)
// // showName().call(user)


// // +++ Метод apply() +++

// // 'apply' є аналогом методу 'call'
// // АЛЕ в методі 'apply()' синтаксис передачі аргументів вимагає масиву '[]'

// // Сигнатура методу 'apply**()**' виглядає так:

// foo.apply(thisArg, [arg1, arg2, ...])

// // thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції.
// // arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції.

// // Метод apply викликає функцію 'foo' таким чином,
// // що значення this у функції буде посилатися на об'єкт 'obj'
// // і передасть елементи масиву як окремі аргументи arg1, arg2 тощо.


// // Приклад методу 'apply()'

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"


// // +++ Метод bind +++

// // Метод 'bind' створює і повертає нову функцію, яка має заздалегідь встановлений контекст, 
// // і ця нова функція може бути викликана пізніше з будь - якими аргументами.

// // Сигнатура методу bind() виглядає так:

// const boundFoo = foo.bind(thisArg, arg1, arg2, ...)

// // thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
// // arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції при її виклику

// // Приклад виклику функції в глобальному контексті, результат якого буде 'undefined'

// "use strict";

// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello;

// greet(); // TypeError: Cannot read properties of undefined (reading 'username')

// // Приклад методу 'bind'

// "use strict";

// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello.bind(customer);

// greet(); // "Hello, Jacob!"


// // Bind/this/Контекст - простими словами

// // Уявіть, що у вас є коробка (об'єкт), в якій зберігаються різні речі (властивості і методи).
// // Коли ви відкриваєте коробку і говорите "покажи мені, що всередині", ви вказуєте на цю коробку.
// // У коді, коли ви викликаєте метод (функцію всередині об'єкта), 'this' вказує на ту коробку, з якої ви його викликаєте.
// // Приклад з коробкою (об'єктом):

// const customer = {
//   username: "Jacob",
//   sayHello() {
//     console.log(`Hello, ${this.username}!`);
//   }
// };

// // Тут customer - це коробка.
// // username - це річ всередині коробки з ім'ям "Jacob".
// // sayHello - це інструкція (метод) всередині коробки, яка каже привітати ім'я з цієї ж коробки.
// // Що робить bind:
// // Уявіть, що ви витягнули інструкцію (метод) з коробки і поклали її окремо:

// const greet = customer.sayHello;

// // Тепер інструкція не знає, з якої коробки вона походить, і тому не знає, де знайти ім'я. Коли ви викликаєте greet(), вона не знає, що таке this, і не може знайти username.
// // bind виправляє це:
// // bind каже: "Ця інструкція завжди повинна знати, що вона з коробки customer".

// const greet = customer.sayHello.bind(customer);

// // Тепер, навіть якщо інструкція (метод) знаходиться окремо, вона завжди пам'ятає, що походить з коробки customer, і знає, де знайти ім'я.
// // Ось фінальний результат:

// greet(); // "Hello, Jacob!"

// // Навіть якщо метод sayHello викликається як greet, він знає, що this - це customer, і тому може знайти username і сказати "Hello, Jacob!".
// // Простими словами, bind допомагає функції завжди пам'ятати, до якого об'єкта (коробки) вона належить, щоб знати, де шукати свої речі (властивості).


// // +++ Метод bind() і колбеки +++

// // Приклад втрати контексту, коли ми передаємо метод об'єкта як колбек-функцію:

// "use strict";

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };

// function makeMessage(callback) {
//   // callback() — це виклик методу getFullName в глобальному контексті
// 	const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName); // TypeError: Cannot read properties of undefined (reading 'firstName')

// // Пояснення:

// // У цьому випадку метод getFullName передається як колбек-функція callback і втрачає контекст об'єкта customer.
// // Це призводить до помилки, оскільки значення this у методі getFullName, коли він викликається як колбек у глобальному контексті, є undefined.
// // Звертаючись до властивостей firstName і lastName, ми отримаємо помилку, оскільки undefined — це не об'єкт.


// // Щоб уникнути цієї втрати контексту, можна використати метод bind(). 

// // Замість передачі оригінального методу getFullName, ми передаємо його копію, до якої прив'язаний контекст об'єкта customer.

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
// 	const username = callback();
// 	console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"
// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"
// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"


// // +++ Стрілочні функції +++

// // * Контекст усередині стрілочної функції визначається місцем її оголошення, а не виклику.

// // * Це означає, що this усередині стрілки посилається на контекст батьківської області видимості, в якій вона була оголошена, і ніколи не змінюється.

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window


// // Приклад, який добре ілюструє, як працює контекст для стрілочних функцій.


// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}


// // Під час виклику методу hotel.showThis() стрілочна функція foo() викликається в глобальному контексті без об'єкта, але значення this усередині неї посилається на контекст методу showThis, тобто об'єкт hotel. Це тому, що вона була оголошена всередині методу showThis, і в момент її оголошення this запам'ятовує посилання на батьківський контекст. Інакше кажучи, стрілки запам'ятовують контекст під час оголошення з батьківської області видимості.

// // На відміну від звичайних функцій, змінити значення this усередині стрілки після її оголошення неможливо. Це означає, що методи call, apply і bind не впливають на значення this у стрілках.

// // Що треба запам’ятати про this у стрілочних функціях?

// // 1.Контекст **this** усередині стрілочної функції визначається місцем її оголошення, а не виклику.
// // 2.Стрілочні функції ігнорують наявність суворого режиму. Тому в глобальному контексті у стрілці завжди this посилається на об'єкт window.
// // 3.Неможливо змінити значення this усередині стрілочних функцій після її оголошення. Методи call, apply і bind не впливають на значення this у стрілках.


// // +++ Алгоритм визначення this +++


// // Ключове слово this — це одна з найзаплутаніших концепцій для новачка.

// // Новачки часто підставляють this методом наукового тику доти, доки скрипт не спрацює.



// // Але все стає значно простішим, коли є простий алгоритм визначення значення this.



// // Крок 1

// // Це стрілочна функція?

// // Якщо відповідь Так, значення this те саме, що у this у зовнішній області видимості
// // Якщо відповідь Ні, переходь на Крок 2


// // Крок 2

// // Чи використовуються методи call, apply або bind?

// // Якщо відповідь Так, значення this — це той самий об’єкт, що передали при їх виклику
// // Якщо відповідь Ні, переходь на Крок 3


// // Крок 3

// // Функція викликається як метод об’єкта object.method?

// // Якщо відповідь Так, значення this — це об’єкт ліворуч від крапки
// // Якщо відповідь Ні, переходь на Крок 4


// // Крок 4

// // Скрипт виконується в суворому режимі?

// // Якщо відповідь Так, значення this — undefined
// // Якщо відповідь Ні, значення this — window


// // +++ Прототип об'єкта +++

// // Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj. 
// // Розгляньмо приклад:

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// // Об'єкт, на який вказує посилання у властивості [[Prototype]], називається прототипом.
// // У нашому прикладі об'єкт animal — це прототип для об'єкта dog.

// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4


// // +++ Перевірка прототипу +++

// // Якщо в коді потрібно перевірити, чи є об'єкт прототипом іншого об'єкта, використовується метод isPrototypeOf().

// objA.isPrototypeOf(objB)

// // Метод перевіряє, чи є об'єкт objA прототипом для об’єкта objB
// // Якщо так, повертає true, в іншому разі повертає false

// const customer = {
// 	username: "Jacob"
// };

// const animal = { 
// 	legs: 4 
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false

// // у першому лозі виводиться об'єкт dog із властивістями name і [[Prototype]].
// // [[Prototype]] вказує на animal як прототип
// // у другому — повертається true, оскільки animal є прототипом для dog
// // у третьому — повертається false, оскільки прототип не успадковується у зворотному напрямку (від dog до animal)
// // у четвертому лозі повертається false, оскільки customer не є прототипом для dog


// // +++ Власні і невласні властивості +++

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: "Mango", [[Prototype]]: animal}
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4

// // Властивість name належить об'єкту dog, тому називається власною властивістю об'єкта dog.
// // Властивість legs не належить об'єкту dog.
// // Це властивість його прототипу animal, тому вона називається невласною властивістю об'єкта dog.

// // Для того щоб перевірити, чи є в об'єкті власна властивість, 
// // використовується метод 'obj.hasOwnProperty(key)'.
// // Цей метод перевіряє наявність власної властивості з ім'ям key і повертає true, 
// // якщо є, і false в іншому випадку.

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

// // +++ Перебір власних властивостей +++

// // Для вибору саме власних властивостей під час перебору циклом for...in
// // необхідно на кожній ітерації додати перевірку на власну властивість
// // методом obj.hasOwnProperty(key). Цей метод повертає true,
// // якщо властивість з іменем key належить об'єкту obj, 
// // а не його прототипу, в іншому разі — false. Розгляньмо приклад:

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
// 	if(dog.hasOwnProperty(key)) {
// 		console.log(key); // "name"
// 	}
// }

// // Якщо це власна властивість — виконуємо тіло if
// // Якщо це невласна властивість — нічого не робимо

// // Методи Object.keys(obj) і Object.values(obj) повертають масив тільки власних ключів 
// // або значень тільки власних властивостей об'єкта obj, без необхідності додаткових перевірок. 
// // Через це на практиці використовують саме їх із циклом for...of, замість for...in і hasOwnProperty.

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(Object.keys(dog)); // ["name"]
// console.log(Object.values(dog)); // ["Mango"]

// for(const key of Object.keys(dog)) {
// 	console.log(key); // "name"
// }

// // +++ Процедурне программування +++

// // Розгляньмо приклад процедурного коду,
// // в якому є глобальні змінні і функція для підрахунку результату.

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);


// // Процедурне програмування — це те, як ми з тобою писали код до сих пір.
// // Воно є простим і зрозумілим і може бути використане для написання простих програм.
// // Проте зі збільшенням складності програми процедурний підхід може стати неефективним,
// // оскільки втрачається зв'язок між даними й методами їх обробки.

// // Сучасний продукт рідко має кодову базу, меншу за 100 000 рядків.
  
// // Важливі також такі критерії:

// // * Надійність — навіть дуже об'ємне і складне ПЗ має працювати стабільно.
// // * Масштабованість — можливість легко адаптувати ПЗ до зростаючого навантаження.
// // * Адаптивність — продукт має бути гнучким, щоб швидко міняти функціонал/інтерфейс.
// // * Вартість — зниження витрат на розробку і збільшення ефективності важливі для успішної конкуренції на ринку.


// // +++ Об'єктно-орієнтоване програмування +++

// // Об'єктно-орієнтоване програмування (ООП) — це парадигма програмування,
// // в якій програми структуровані як сукупність об'єктів.
// // Ці об’єкти представляють реальні або абстрактні сутності: користувач, магазин, автомобіль тощо.
// // Кожен з об’єктів містить дані(властивості) і методи для взаємодії з ними.

// // Процедурне программування:

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);


// // ООП - той же самий приклад, тільки в об'єктному програмуванні
// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// employee.getWage();

// // !!! При такому підході відсутні або майже відсутні глобальні змінні. Методи не залежать від параметрів,
// // а використовують властивості об'єкта, які задаються при його створенні і можуть бути змінені іншими методами.


// // +++ Класс +++

// // Клас — це спосіб опису сутності, що визначає структуру та поведінку об'єктів,
// // а також правила для взаємодії з цією сутністю(контракт).
// // Вони виступають в якості шаблонів для створення нових об'єктів.

// // +++ Клас визначає (наприклад) сутність: автомобіль.

// // Властивостями класу будуть запчастини: двигун, колеса, фари тощо.

// // Методами класу будуть дії: відчинити двері, завести двигун, збільшити швидкість тощо.


// // +++ Екземпляр (об'єкт, інстанція) — це окремий представник класу,

// // який має дані(властивості) і методи(функції),
// // які працюють з цими даними.Екземпляр — це те,
// // що створено за кресленням, тобто на підставі опису з класу.

// // Клас — це якийсь абстрактний автомобіль на кресленні
// // Екземпляр (об'єкт) — це конкретний автомобіль, що стоїть у нас під вікнами


// // +++ Інтерфейс класу +++

// // Інтерфейс — це набір властивостей і методів класу, доступних для використання у роботі з екземпляром.


// // +++ Конструктор класу +++

// class User {
//   // Синтаксис оголошення методу класу
//   constructor() {
// 		// ...
//   }
// }

// // Виклик класу з оператором 'new' призводить до створення нового об'єкта й автоматичного виклику методу constructor.

// class User {
//   constructor() {
// 		console.log("constructor call")
//   }
// }

// const mango = new User(); // "constructor call"
// console.log(mango); // {}

// // Аргументи, які передаються при виклику new User(), 
// // стають значеннями параметрів для методу constructor.

// class User {
//   constructor(name, email) {
// 		console.log(name, email);
//   }
// }

// const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
// console.log(mango); // {}

// // Властивості name та email називаються публічними властивостями,
// // оскільки вони є власними властивостями об'єкта-екземпляра.

// // Приклад классу

// class Car {
//   constructor (brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// const newCar = new Car();

// // Об'єкт параметрів

// class Car {
//   constructor({brand, model, price}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// // Методи класу

// // Для роботи з властивостями майбутнього екземпляра використовуються методи класу.

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   // Метод getEmail
//   getEmail() {
// 		// ...
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
// 		// ...
//   }
// }

// // Для доступу до властивостей у методах використовується ключове слово this,
// // оскільки методи будуть викликані в контексті об'єкта-екземпляра.

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// // Після створення екземпляра можна використовувати оголошені методи класу,
// // які будуть звертатися до властивостей об'єкта, що їх викликав.

// const mango = new User({ 
// 	name: "Mango", 
// 	email: "mango@mail.com" 
// });

// console.log(mango.getEmail()); // "mango@mail.com"

// mango.changeEmail("new@mail.com");

// console.log(mango.getEmail()); // "new@mail.com"


// // +++ Прототип екземпляру +++

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({ 
// 	name: "Mango", 
// 	email: "mango@mail.com" 
// });

// console.log(mango.getEmail());  // “mango@mail.com”

// // * Об'єктно-орієнтоване програмування в JavaScript побудоване на прототипному наслідуванні.
// // * Методи класу додаються до спеціального об'єкта, який зберігається у властивості 'prototype' самого класу.
// // * При створенні екземпляра через 'new', об'єкт, збережений у властивості 'prototype' класу,
// // автоматично стає його прототипом.
// // !!! Це означає, що властивість[[Prototype]] екземпляра отримує посилання на властивість prototype класу.
// // * Завдяки цьому об'єкт-екземпляр може використовувати методи класу, тобто властивості свого прототипу

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}


// // +++ Приватні властивості +++

// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.name); // "Mango"
// console.log(mango.#email); // Виникне помилка, це приватна властивість


// // Для того щоб отримати або змінити значення приватної властивості використовуються публічні методи.


// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"


// // +++ Приватні методи +++

// // Додаючи до назви методу на початку символ '#', ми робимо його приватним.

// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

// // Публічний метод для отримання електронної пошти
//   getEmail() {
//     return this.#email;
//   }

// // Публічний метод для зміни електронної пошти
//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"


// // Кожен раз, коли електронна пошта змінюється, потрібно валідувати її формат.
// // Це можна зробити за допомогою приватних методів. 

// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Публічний метод для отримання електронної пошти
//   getEmail() {
//     return this.#email;
//   }

//   // Публічний метод для зміни електронної пошти
//   changeEmail(newEmail) {
//     if (this.#validateEmail(newEmail)) {
//       this.#email = newEmail;
//     } else {
//       console.log('Invalid email format');
//     }
//   }

//   // Приватний метод для валідації електронної пошти
//   #validateEmail(email) {
//     return email.includes('@');
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// // Спробуємо змінити електронну пошту
// mango.changeEmail('newmail.com'); // "Invalid email format"
// mango.changeEmail('new@mail.com');
// console.log(mango.getEmail()); // "new@mail.com"

// // Прямий виклик приватного методу ззовні призведе до помилки
// mango.#validateEmail('test'); // Помилка

// // У цьому прикладі приватний метод #validateEmail забезпечує додаткову логіку для валідації електронної пошти.
// // Цей метод не доступний ззовні класу, тому користувачі (або інші розробники) не можуть його викликати напряму.
// // Вони можуть лише використовувати публічний метод changeEmail,
// // який у свою чергу використовує приватний метод для валідації.
// // Таким чином, ми інкапсулюємо внутрішню логіку й забезпечуємо безпеку та стабільність роботи класу.


// // +++ Геттери і сеттери +++

// // Геттери і сеттери — це спеціальний синтаксис оголошення методів для взаємодії з властивостями.

// class User {
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// // У прикладі вище оголошені геттер і сеттер email. Щоб оголосити геттер і сеттер,
// // потрібно поставити перед ім'ям властивості відповідні ключові слова — get і set.
// // Всередині цих методів:
// // * повертаємо значення приватної властивості #email за допомогою геттера
// // * змінюємо її значення за допомогою сеттера
// // Також вважається гарною практикою називати геттери і сеттери так само, як і властивість, з якою вони працюють.

// // !!! Геттер і сеттер повинні називатися однаково.
// // Краще називати геттери і сеттери так само, як і властивість, з якою вони працюють.
// // Геттер може існувати без сеттера, так само як і сеттер без геттера.

// // Приклад: геттер виконується при спробі отримати значення властивості, а сеттер — при спробі її змінити.

// const mango = new User({ 
// 	name: "Mango", 
// 	email: "mango@mail.com" 
// });

// console.log(mango.email); // mango@mail.com

// mango.email = "mango@supermail.com";

// console.log(mango.email); // mango@supermail.com

// // Звертаючись до mango.email, викликається геттер get email() {...} і виконується його код.
// // При спробі запису mango.email = "mango@supermail.com" викликається сеттер set email(newEmail) {...},
// // і рядок "mango@supermail.com" буде значенням параметра newEmail.

// set email(newEmail) {
//   if(newEmail === "") {
//     console.log("Помилка! Пошта не може бути порожнім рядком!");
//     return;
//   }

//   this.#email = newEmail;
// }

// // !!! Геттери і сеттери доречно використовувати для простих операцій читання та зміни значення властивостей,
// // особливо приватних, як їх публічний інтерфейс.
// // Для роботи з властивістю, яка зберігає масив або об'єкт, вони не підійдуть.

// // Приклад get/set

// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
// }
// }

