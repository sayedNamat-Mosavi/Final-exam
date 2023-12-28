import BookElement from './BookElement';
import AddBookForm from './AddBookForm';

function BooksCollection() {
  return (
    <div className="backgroundcream">
      <BookElement />
      <hr />
      <AddBookForm />
    </div>
  );
}

export default BooksCollection;
