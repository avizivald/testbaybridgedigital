import React from 'react';
import { Button } from 'react-bootstrap';

import './Cart.css';

function Book(props) {
    const name = props.book.name;
    const author = props.book.author;
    const price = props.book.price;
    function addBook  ()  {
        console.log('hhhhhhhhhhhhhhhhhhhhhhh');
    }
    return (
        <React.Fragment>
            <tr>
                <td>{name}</td>
                <td>{author.name}</td>
                <td>{price}</td>
                <td><input type="number" onChange={addBook} /></td>
                <td><button type="checkbox" /></td>
            </tr>
        </React.Fragment>
    );
}

export default Book;
