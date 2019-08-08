import React from 'react';



class ShowProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.product.productId}</td>
                <td>{this.props.product.productName}</td>
                <td>{this.props.product.refImage}</td>
                <td>{this.props.product.price}</td>
                <td>{this.props.product.rating}</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
            </tr>
        );
    }
}

export default ShowProduct;