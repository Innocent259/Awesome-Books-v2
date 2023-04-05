import Library from './modules/library.js';
import showTime from './modules/dateTime.js';
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

showTime();
