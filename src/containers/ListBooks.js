import React from "react";
import { connect } from "react-redux";
import cls from "classnames";
import opa from "object-path";
import sortBy from "sort-by";

import Book from "../components/Book";

const ListBooks = props => {
  const sort = props.sort === 'title' ? ['title', 'author'] : ['author', 'title'];

  return (
    <div id="main">
      <div className="header">
        <div className="title">Book list</div>
        <div
          className="toggle"
          onClick={() => props.navigate(`?sort=${sort[1]}`)}>Sort by {sort[1]}</div>
        <div className="action">
          <input
            type="button"
            className="button"
            value="Add a Book"
            onClick={() => props.navigate('/add')} />
        </div>
      </div>
      <div className="panel">
        <div className="books">
          {props.books.map(book => <Book
            {...book}
            key={book.idx}
            viewDetail={() => props.navigate(`/book/${book.idx}`)} />)}
        </div>
      </div>
    </div>
  );
}

const mapState = state => {
  const sort = opa.get(state.router, "search.sort", "title");

  const books = [];
  for (const idx in state.books.map) {
    books.push({...state.books.map[idx], idx});
  }
  books.sort(sortBy(sort));

  return {
    books,
    sort
  };
};

const mapDispatch = dispatch => ({
  navigate: dispatch.router.navigate
});

export default connect(mapState, mapDispatch)(ListBooks);
