// eslint-disable-next-line max-classes-per-file
class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
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
  
    addBookToCollection() {
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
  
    removeBookFromCollection(title, author) {
      const bookIndex = this.booksCollection.findIndex(
        (book) => book.title === title && book.author === author,
      );
      if (bookIndex !== -1) {
        this.booksCollection.splice(bookIndex, 1);
        localStorage.setItem('booksCollection', JSON.stringify(this.booksCollection));
        this.displayBooks();
      }
    }
  
    displayBooks() {
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
  // eslint-disable-next-line no-unused-vars
  const library = new Library();
  
  const headerLinks = document.querySelector('#header');
  const popList = document.querySelector('#pop-list');
  const listOfBooks = document.querySelector('#book-lists');
  const popAdded = document.querySelector('#pop-added');
  const addBook = document.querySelector('.add-book-section');
  const popContact = document.querySelector('#pop-contact');
  const showContact = document.querySelector('.contact');
  
  headerLinks.addEventListener('click', (e) => {
    e.preventDefault();
    const currentLink = e.target;
    if (currentLink === popList) {
      listOfBooks.classList.add('show-list');
      addBook.classList.remove('show-add-menu');
      showContact.classList.remove('show-contact');
    } else if (currentLink === popAdded) {
      addBook.classList.add('show-add-menu');
      listOfBooks.classList.remove('show-list');
      showContact.classList.remove('show-contact');
    } else if (currentLink === popContact) {
      showContact.classList.add('show-contact');
      listOfBooks.classList.remove('show-list');
      addBook.classList.remove('show-add-menu');
    }
  });