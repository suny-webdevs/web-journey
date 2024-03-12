/* eslint-disable react/prop-types */

import Book from "./Book"

export default function BookStore({books}) {
    return (
        <div>
            <h1>Books: {books.length}</h1>
            {
                books.map(book => <Book key={book.id} book={book} />)
            }
        </div>
    )
}