import BookShow from "./BookShow";

function BookList({books, onDeleteBook, onEditBook}){

    const renderedBooks = books.map((book) => {
        return <BookShow onEditBook={onEditBook} onDeleteBook={onDeleteBook} key={book.id} book={book} />
    })

    return <div className="book-list">{renderedBooks}</div>
}

export default BookList;