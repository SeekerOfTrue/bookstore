export const searchBook = (word) => {
    return {
      type: 'FIND_BOOK',
      word
    }
  }