import React, {useState} from 'react';
import {connect} from 'react-redux';

import Field from '../components/Field';

function AddBook(props) {
  const [state, setState] = useState({
    title: '',
    author: '',
    description: ''
  });

  const onChange = key => e =>
    setState({...state, [key]: e.target.value});

  const onSubmit = async e => {
    e.preventDefault();
    await props.addBook(state);
    props.navigate('/');
  };

  return (
    <div id="main">
      <div className="modal">
        <div className="title">Add a Book</div>
        <form onSubmit={onSubmit}>
          <Field placeholder="Title" onChange={onChange('title')} />
          <Field placeholder="Author" onChange={onChange('author')} />
          <Field placeholder="Description" onChange={onChange('description')} />
          <div>
            <input type="submit" className="button" value="Save" />
          </div>
        </form>
      </div>
    </div>
  );
}

const mapDispatch = dispatch => ({
  navigate: dispatch.router.navigate,
  addBook: dispatch.books.addBook
});

export default connect(null, mapDispatch)(AddBook);
