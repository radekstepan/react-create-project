import React, {useEffect} from 'react';
import {connect} from 'react-redux';

function ViewBook(props) {
  const {resolveBook, idx, book} = props;

  useEffect(() => {
    // Find the book.
    resolveBook(idx);
  }, [resolveBook, idx]);

  const onRemoveBook = () => {
    props.goBack(); // otherwise we get a "flash" from this ui
    props.removeBook(idx);
  };

  switch(true) {
    case !book:
      return (
        <div id="main">
          <div className="wrapper">
            Loading &hellip;
          </div>
        </div>
      );
    case 'error' in book:
      return (
        <div id="main">
          <div className="wrapper">
            <div className="message error">Book not found. But since you want it
              so much, our best scribes are on it!</div>
          </div>
        </div>
      );
    default:
      return (
        <div id="main">
          <div className="header">
            <div className="title">{book.title}</div>
            <div
              className="toggle"
              onClick={props.goBack}>Back to list</div>
            <div className="action" />
          </div>
          <div className="panel">
            <div>{book.author}</div>
            <div>{book.description}</div>
          </div>
          <div
            className="link"
            onClick={onRemoveBook}>Remove this book</div>
        </div>
      );
  }
}

const mapState = state => ({
  idx: state.router.params.idx,
  book: state.books.book
});

const mapDispatch = dispatch => ({
  goBack: dispatch.router.goBack,
  navigate: dispatch.router.navigate,
  resolveBook: dispatch.books.resolveBook,
  removeBook: dispatch.books.removeBook
});

export default connect(mapState, mapDispatch)(ViewBook);
