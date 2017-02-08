
export function selectBook(book){
    //selectBook is an actionCreator, it needs to return an object with type property
    return {
      type: 'BOOK_SELECTED',
      payload: book
        
    };
}