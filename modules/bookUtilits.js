export const displayBooks = (booksCollection, removeBook) => {
  const bookList = document.querySelector('.booklist');
  bookList.innerHTML = '';

  booksCollection.forEach((book, index) => {
    const bookElement = document.createElement('div');
    bookElement.className = index % 2 === 0 ? 'even dynamic-list' : 'odd dynamic-list';
    bookElement.innerHTML = `
        <span class="books-container">
          <p>"${book.title}"</p>
          <p class="para-by">by</p>
          <h2>${book.author}</h2>
        </span>
        <button class="remove-book" data-index="${index}">Remove</button>
      `;
    bookList.appendChild(bookElement);
  });

  const removeButtons = document.querySelectorAll('.remove-book');
  removeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const index = parseInt(button.getAttribute('data-index'), 10);
      removeBook(index);
    });
  });
};

export const addBook = (event, booksCollection, displayBooks, saveBooksToStorage) => {
  event.preventDefault();

  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title === '' || author === '') {
    return;
  }

  const newBook = { title, author };

  booksCollection.push(newBook);
  titleInput.value = '';
  authorInput.value = '';
  displayBooks();
  saveBooksToStorage();
};

export const removeBook = (index, booksCollection, displayBooks, saveBooksToStorage) => {
  booksCollection.splice(index, 1);
  displayBooks();
  saveBooksToStorage();
};

export const showAddSection = (addSection, listSection, contactSection) => {
  addSection.style.display = 'block';
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
};

export const showListSection = (addSection, listSection, contactSection) => {
  addSection.style.display = 'none';
  listSection.style.display = 'block';
  contactSection.style.display = 'none';
};

export const showContactSection = (addSection, listSection, contactSection) => {
  addSection.style.display = 'none';
  listSection.style.display = 'none';
  contactSection.style.display = 'block';
};
