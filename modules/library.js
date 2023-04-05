import Book from './bookClass.js';

class Library {
  constructor() {
    this.booksCollection = JSON.parse(localStorage.getItem('booksCollection')) || [];
    this.booksContainer = document.getElementById('book-list');
    this.titleInput = document.getElementById('title');
    this.authorInput = document.getElementById('author');
    this.addButton = document.getElementById('add-button');
    this.addButton.addEventListener('click', this.addBookToCollection.bind(this));
    this.displayBooks();
  }

  addBookToCollection = () => {
    const title = this.titleInput.value.trim();
    const author = this.authorInput.value.trim();
    if (!title || !author) {
      return;
    }
    const newBook = new Book(title, author);
    this.booksCollection.push(newBook);
    localStorage.setItem('booksCollection', JSON.stringify(this.booksCollection));
    this.titleInput.value = '';
    this.authorInput.value = '';
    this.displayBooks();
  }

  removeBookFromCollection = (title, author) => {
    const bookIndex = this.booksCollection.findIndex(
      (book) => book.title === title && book.author === author,
    );
    if (bookIndex !== -1) {
      this.booksCollection.splice(bookIndex, 1);
      localStorage.setItem('booksCollection', JSON.stringify(this.booksCollection));
      this.displayBooks();
    }
  }

  displayBooks = () => {
    this.booksContainer.innerHTML = '';
    for (let i = 0; i < this.booksCollection.length; i += 1) {
      const book = this.booksCollection[i];
      const bookElement = document.createElement('div');
      bookElement.className = i % 2 === 0 ? 'even dynamic-container' : 'odd dynamic-container';
      bookElement.innerHTML = `<div class="book-holder">
        <div class="author-paragraph">
          <p>"${book.title}"</p>
          <span>by</span>
          <p>${book.author}</p>
        </div>
        </div>
        `;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeBookFromCollection(book.title, book.author);
      });
      bookElement.appendChild(removeButton);
      this.booksContainer.appendChild(bookElement);
    }
  }
}

export default Library;
