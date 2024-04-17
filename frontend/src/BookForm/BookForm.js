import { useState } from 'react';
import './BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setauthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      // dispatch action
      setTitle('');
      setauthor('');
    }
  };
  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
