import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return { ...state, items: state.list.items || []}
    }

    function ShoppingCart(props) {
        let listItemsJSX;
        const listItems = props.items || [];
        let keys =Object.keys(listItems)
         listItemsJSX = keys.map(item => <div key={item}><p>{item}</p><p> Total :{listItems[item][0][0]*listItems[item][0][1]}</p></div>) 
        return (
        <div>
        {listItemsJSX}
        </div>
        );
        }
        export default connect(
        mapStateToProps,
        null
        )(ShoppingCart);