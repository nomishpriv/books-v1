import { useState } from "react";
function BookEdit( {book, onSubmit}){

    const [title, setTile] = useState(book.title);

    const handleChangeInput = (event) => {
        setTile(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title)
    }

    

    return <form onSubmit={handleSubmit} className="book-edit">
<label> Title </label>
<input value={title} onChange={handleChangeInput} className="input"/>
<button className="buttom is-primary" > Save </button>
    </form>
}

export default BookEdit;