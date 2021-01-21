import React from 'react';
import { Table } from 'react-bootstrap';
import Cart from './Cart';
import data from './pr/product.json'
import './Product.css'; 
import {addItem} from './redux/actions'

function Product() {
    const books = data.books.map((book) =>
    <Cart book= {book}/>
  );
    return (
        <div className="Product">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>author Name</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>save</th>
                    </tr>
                </thead>
                <tbody>
                   {books}
                </tbody>
            </Table>
        </div>
    );
}

export default Product;
