import React from 'react';
import { Button } from 'react-bootstrap';
import Book from './Book';
import './Cart.css';

function Cart(props) {
    return (
        <React.Fragment>
            <Book book={props.book} />
        </React.Fragment>
    );
}

export default Cart;
