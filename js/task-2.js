// Main function

// Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише один аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.

// Оголоси наступні методи класу:

// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.
  
class Storage {
    #items;
    constructor(items) {
        // Зберігаємо початковий масив товарів у приватну властивість items
        this.#items = items;
    }
     
    // Метод для отримання масиву поточних товарів
    getItems() {
        return this.#items;
    }
    
    // Метод для додавання нового товару
    addItem(newItem) {
        this.#items.push(newItem);
    }

    // Метод для видалення товару
    removeItem(itemToRemove) {
        this.#items.filter(item => item !== itemToRemove);
        // this.#items.filter(function(item) {
        // return item !== itemToRemove;
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


