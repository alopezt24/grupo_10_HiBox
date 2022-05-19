
import React, {Component} from 'react';

class ProductDetail extends Component{
    constructor(props){
        super(props)
        this.state ={
            product : {},
        }
    }
    //obtenemos la url del nav, se separa por / y se toma el ultimo valor (en este caso seria 2 = id)
    componentDidMount(){
        let id = window.location.pathname.split('/')[2];
        fetch('/api/products/' + id )
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            // console.log(props)
            this.setState({product: products.data})
        })
        .catch(error => console.log(error))
    }


    render(){
        return (
            <React.Fragment>
            {/*<!-- product Detail -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
            <div className="col-lg-12 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">Detalle de ultimo producto</h5>
                            </div>
                            <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Categoría</th>
                                    <th>Detalle</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{this.state.product.id}</td>
                                <td>{this.state.product.name}</td>
                                <td>{this.state.product.categorys}</td>
                                <td>{this.state.product.detail}</td>
                                <td>{this.state.product.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
              </div>
            </div>
        </div>

    </React.Fragment>
        )
    }
}
export default ProductDetail;

