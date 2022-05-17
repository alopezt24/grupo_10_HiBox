import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Products in DataBase",
    valor: 50,
    icono: "fas fa-film",
}

let amount ={
    color:   "success",
    titulo: "Categories",
    valor: 50,
    icono: "fas fa-award",
}

let user = {
    color:   "warning",
    titulo: "Users",
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