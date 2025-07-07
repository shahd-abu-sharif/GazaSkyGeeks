// Object.create() prototype 

const bookPrototype = {
  toggle() {
    this.isRead = !this.isRead
  },
  describe() {
    return `"${this.title}" by ${this.author} [${this.isRead ? 'Read' : 'Unread'}]`
  }
};

function Book(title, author, isRead = false) {
  const book = Object.create(bookPrototype);
  book.title = title;
  book.author = author;
  book.isRead = isRead;
  return book;
}

const book = Book("JS hidden doors", "Shahd abu sharif")



