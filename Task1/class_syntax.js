// Class

class Book {
  constructor(title, author, isRead = false) {
    this.title = title
    this.author = author
    this.isRead = isRead
  }

  toggleReadStatus() {
    this.isRead = !this.isRead
  }

  describe() {
    return `"${this.title}" by ${this.author} [${this.isRead ? 'Read' : 'Unread'}]`
  }
}

const book = new Book("JS hidden doors", "Shahd abu sharif", true)
console.log(book.describe());





