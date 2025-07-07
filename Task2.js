class LibraryItem {
  #id
  #title
  #isCheckedOut = false

  constructor(id, title) {
    this.#id = id
    this.#title = title
  }

 
  static generateId() {
    return Math.floor(Math.random() * 1000)
  }


  get id() {
    return this.#id
  }

  get title() {
    return this.#title
  }

  get isCheckedOut() {
    return this.#isCheckedOut
  }

  
  checkOut() {
    this.#isCheckedOut = true
    return `"${this.#title}" has been checked out.`
  }

  checkIn() {
    this.#isCheckedOut = false
    return `"${this.#title}" has been checked in.`
  }

  describe() {
    return `[${this.constructor.name}] ID: ${this.#id}, Title: "${this.#title}", Status: ${this.#isCheckedOut ? 'Checked Out' : 'Available'}`
  }
}




```SUB CLASS SECTION```

class Book extends LibraryItem {
  #author
  #isbn

  constructor(id, title, author, isbn) {
    super(id, title)
    this.#author = author
    this.#isbn = isbn
  }

  get author() {
    return this.#author
  }

  get isbn() {
    return this.#isbn
  }

  describe() {
    return `${super.describe()}, Author: ${this.#author}, ISBN: ${this.#isbn}`
  }


  getCitation() {
    return `${this.#author}. "${this.title}".`
  }
}

``` EXAMPLES OF USAFE : my favourit books ```

const book = new Book(
    "Atomic Habits",
    "James Clear",
    "970-592246851",
);

console.log(book.describe());
console.log(book.checkOut()); 
console.log(book.isCheckedOut);
console.log(book.checkIn());
console.log(book.getCitation());
























