//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente
import ProductList from './ProductList';

class Product extends Component{
    constructor(){
        super()
        this.state ={
            products : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount(){
        fetch('/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            //console.log(products)
            this.setState({products: products.data})
        })
        .catch(error => console.log(error))

    }


    render(){
        return (
            <React.Fragment>
            {/*<!-- products LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">All the products in the Database</h1>
            
            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Category_id</th>
                                    <th>Detail</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            {/* <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Titulo</th>
                                    <th>Calificación</th>
                                    <th>Premios</th>
                                    <th>Duración</th>
                                </tr>
                            </tfoot> */}
                            <tbody>
                                {
                                    //console.log(this.state.products)
                                    this.state.products.map((product,index)=>{
                                        return <ProductList  {...product} key={index}  />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>


    
    </React.Fragment>
    )
    }
}
export default Product;
