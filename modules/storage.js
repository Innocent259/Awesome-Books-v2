export function loadBooksFromStorage() {
    const storedBooks = localStorage.getItem('books');
    return storedBooks ? JSON.parse(storedBooks) : [];
  }
  
  export function saveBooksToStorage(booksCollection) {
    localStorage.setItem('books', JSON.stringify(booksCollection));
  }
  