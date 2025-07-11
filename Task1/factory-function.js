// Factory function

function Book(title, author, isRead = false) {

    const book ={}

    book.title = title
    book.author = author
    book.isRead = isRead
    book.toggleReadStatus = function () {
      this.isRead = !this.isRead
    };

    book.describe = function () {
      return `"${this.title}" by ${this.author} [${this.isRead ? 'Read' : 'Unread'}]`;
    };

    return book;
}



const book = Book("JS hidden doors", "Shahd abu sharif");
book.toggleReadStatus()
console.log(book.describe());










