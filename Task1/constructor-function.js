// Constructor Funtion 
function Book(title, author, isRead = false) {
  this.title = title
  this.author = author
  this.isRead = isRead

  this.toggleReadStatus = function() {
    this.isRead = !this.isRead
  };

  this.describe = function() {
    return `"${this.title}" by ${this.author} [${this.isRead ? 'Read' : 'Unread'}]`
  };
}


const book = new Book("JS hidden doors", "Shahd abu sharif")
console.log(book.describe());
