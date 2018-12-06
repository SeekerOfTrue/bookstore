const initState = {
    books: [
      {id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'The novel chronicles an era that Fitzgerald himself dubbed the "Jazz Age". Following the shock and chaos of World War I, American society enjoyed unprecedented levels of prosperity during the "roar...'},
      {id: '2', title: 'Hamlet', author: 'William Shakespeare', description: 'The Tragedy of Hamlet, Prince of Denmark, or more simply Hamlet, is a tragedy by William Shakespeare, believed to have been written between 1599 and 1601. The play, set in Denmark, recounts how Pri...'},
      {id: '3', title: 'The Old Man and the Sea', author: 'Ernest Hemingway', description: 'The Old Man and the Sea is one of Hemingways most enduring works. Told in language of great simplicity and power, it is the story of an old Cuban fisherman, down on his luck, and his supreme ordea...'},
      {id: '4', title: 'The Lord of the Rings', author: 'J. R. R. Tolkien', description: 'The Lord of the Rings is an epic high fantasy novel written by philologist and Oxford University professor J. R. R. Tolkien. The story began as a sequel to Tolkiens earlier, less complex children...'},
      {id: '5', title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', description: 'Since 1943, the wise little boy from Asteroid B-612 has led children and their adults to deeper understandings of love, friendship, and responsibility. The Little Prince is a cherished story, read ...'},
      {id: '6', title: 'The Shining', author: 'Stephen King', description: 'The Shining is a 1977 horror novel by American author Stephen King. The title was inspired by the John Lennon song "Instant Karma!", which contained the line "We all shine on…". It was Kings third...'}
    ]
  }
  
  const booklistReducer = (state = initState, action) => {

    if(action.type === 'DELETE_BOOK'){
     let newPosts = state.books.filter(book => {
       return book.id !== action.id
     });
     return {
       ...state,
       books: newPosts
     }
    }
  
    if(action.type === 'ADD_BOOK'){
      let newBook = [...state.books, action.newBook]
      return {
        ...state,
        books: newBook
      }
     }

     if(action.type === 'EDIT_BOOK'){
      let editedBook = state.books.find(book => {
        return book.id === action.newEditBook.id
      });
        editedBook.title = action.newEditBook.title
        editedBook.author = action.newEditBook.author
        editedBook.description = action.newEditBook.description
      return {
        ...state
      }
     }

     return state;
  }
  
  export default booklistReducer