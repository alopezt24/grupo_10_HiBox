import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Products in DataBase",
    valor: 50,
    icono: "fas fa-boxes text-gray-300",
}

let amount ={
    color:   "success",
    titulo: "Categories in DataBase",
    valor: 50,
    icono: "fas fa-list text-gray-300",
}

let user = {
    color:   "warning",
    titulo: "Users in DataBase",
    valor: 50,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;