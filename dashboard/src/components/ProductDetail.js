//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

class ProductDetail extends Component{
    constructor(props){
        super(props)
        this.state ={
            product : []
        }
    }

    componentDidMount(props){
        fetch('/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            //console.log(products)
            let id = Number(props.match.params.id);
            let product = products.data.find(oneProduct => oneProduct.id === id);
            this.setState({product: product})
        })
        .catch(error => console.log(error))
    }


    render(){
        return (
            <React.Fragment>
                {/*<!-- products LIST -->*/}
                    <div className="col-lg-12 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">Todos los productos en Base de Datos</h5>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={this.state.lastProduct.productImage} alt="Producto - Hibox "/>
                                </div>
                                <h3>{this.state.lastProduct.name}</h3>
                                <h3>{this.state.lastProduct.price}</h3>
                                <h3>{this.state.lastProduct.category}</h3>
                                <p>{this.state.lastProduct.detail}</p>
                            </div>
                        </div>
                    </div>
             </React.Fragment>
        )
    }
}
export default ProductDetail;
