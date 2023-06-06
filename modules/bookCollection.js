import { loadBooksFromStorage, saveBooksToStorage } from './storage.js';
import {
  displayBooks,
  addBook,
  removeBook,
  showAddSection,
  showListSection,
  showContactSection,
} from './bookUtilits.js';

class BookCollection {
  constructor() {
    this.booksCollection = [];
    this.loadBooksFromStorage();
    this.displayBooks();

    this.addLink = document.getElementById('add-link');
    this.listLink = document.getElementById('list-link');
    this.contactLink = document.getElementById('contact-link');
    this.addSection = document.getElementById('add-section');
    this.listSection = document.getElementById('list-section');
    this.contactSection = document.getElementById('contact-section');
    this.form = document.getElementById('form');
    this.addButton = document.querySelector('.add-button');

    this.addLink.addEventListener('click', this.showAddSection.bind(this));
    this.listLink.addEventListener('click', this.showListSection.bind(this));
    this.contactLink.addEventListener('click', this.showContactSection.bind(this));
    this.addButton.addEventListener('click', this.addBook.bind(this));
  }

  loadBooksFromStorage() {
    this.booksCollection = loadBooksFromStorage();
  }

  saveBooksToStorage() {
    saveBooksToStorage(this.booksCollection);
  }

  displayBooks() {
    displayBooks(
      this.booksCollection,
      this.removeBook.bind(this),
    );
  }

  addBook(event) {
    addBook(
      event,
      this.booksCollection,
      this.displayBooks.bind(this),
      this.saveBooksToStorage.bind(this),
    );
  }

  removeBook(index) {
    removeBook(
      index,
      this.booksCollection,
      this.displayBooks.bind(this),
      this.saveBooksToStorage.bind(this),
    );
  }

  showAddSection() {
    showAddSection(
      this.addSection,
      this.listSection,
      this.contactSection,
    );
  }

  showListSection() {
    showListSection(
      this.addSection,
      this.listSection,
      this.contactSection,
    );
  }

  showContactSection() {
    showContactSection(
      this.addSection,
      this.listSection,
      this.contactSection,
    );
  }
}

export default BookCollection;
