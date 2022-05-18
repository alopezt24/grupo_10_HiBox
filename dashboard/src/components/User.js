//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente
import UserList from './UserList';

class User extends Component{
    constructor(){
        super()
        this.state ={
            users : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount(){
        fetch('/api/users')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(users =>{
            //console.log(users)
            this.setState({users: users.data})
        })
        .catch(error => console.log(error))

    }


    render(){
        return (
            <React.Fragment>
            {/*<!-- users LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">All the users in the Database</h1>
            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Titulo</th>
                                    <th>Calificación</th>
                                    <th>Premios</th>
                                    <th>Duración</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Titulo</th>
                                    <th>Calificación</th>
                                    <th>Premios</th>
                                    <th>Duración</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    //console.log(this.state.users)
                                    this.state.users.map((user,index)=>{
                                        return <UserList  {...user} key={index}  />
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
export default User;
