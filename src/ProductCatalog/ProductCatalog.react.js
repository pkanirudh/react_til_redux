import React from 'react';

import './ProductCatalog.css';
import ShowProduct from '../ShowProduct/ShowProduct.react';

class ProductCatalog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products:[],
            loaded: true
        }
    }

    componentDidMount(){
        fetch("http://localhost:8080/products").then(resp=>resp.json())
        .then(products => this.setState({products:products,loaded:true}));
        
    }
    
    render() {
        if(this.state.loaded)
        return (
            <div className='productcatalog_wrapper'>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Reference Image</td>
                            <td>Price</td>
                            <td>Rating</td>
                        </tr>
                    </thead>
                    <tbody>
                            {this.state.products.map((eachProduct,index) => {
                                return(
                                    <ShowProduct key={index} product={eachProduct}></ShowProduct>
                                );
                                })
                            }
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductCatalog;