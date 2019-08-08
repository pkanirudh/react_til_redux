import React from 'react';



class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newProduct:{
            productId: 104,
            productName: "Glasses",
            imageRef: "images/glasses",
            price: 3000,
            rating: 4.6
            }
        }
    }
    render() {
        return (
            <div >
                <button >Submit Product</button>
            </div>
        );
    }
}

export default AddProduct;