import React from 'react';

function ProductList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.categorys.category}</td>
                <td>{props.detail}</td>
                <td>{props.price}</td>
            </tr>
        </React.Fragment>
    )
}
export default ProductList;