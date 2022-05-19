
import React, {Component} from 'react';

class ProductDetail extends Component{
    constructor(props){
        super(props)
        this.state ={
            product : {},
            // id : Number(props.match.params.id)
        }
    }

    componentDidMount(){
        fetch('/api/products/27' )//como obtener parametros de la url.. "route.params" reemplazar por el 27
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            // console.log(props)
            //let product = products.data.find(oneProduct => oneProduct.id === id);
            this.setState({product: products.data})
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
                                <span>{this.state.product.name}</span>
                                </div>

                            </div>
                        </div>
                    </div>
             </React.Fragment>
        )
    }
}
export default ProductDetail;
