import React, { useState } from 'react';
import { addItem } from './redux/actions';
import { connect } from 'react-redux';
import './Cart.css';
const mapDispatchToProps = (dispatch) => ({
    addToList: (item) => dispatch(addItem(Object.keys(item)[0],Object.values(item)))
    })

function Book(props) {
    const name = props.book.name;
    const author = props.book.author;
    const price = props.book.price;

    const [item, setItem] = useState({});

  
    function addBook  (e)  {
        setItem({[name]:[e.target.value,price]});
    }
    function addChange  (e)  {
        if (e.target.checked &&Object.keys(item).length !== 0) {
            props.addToList(item);
        } else {
            
        }
       
    }
    return (
        <React.Fragment>
            <tr>
                <td>{name}</td>
                <td>{author.name}</td>
                <td>{price}</td>
                <td><input type="number" min="1"  onChange={addBook} /></td>
                <td><input type="checkbox" onChange={addChange} /></td>
            </tr>
        </React.Fragment>
    );
}

export default connect(
    null,
    mapDispatchToProps
    )(Book)