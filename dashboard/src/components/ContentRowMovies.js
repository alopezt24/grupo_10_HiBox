import React from 'react'
import SmallCart from './SmallCart'

function ContentRowMovies() {

    const moviesInDb = {
        titulo: 'Products in Data Base',
        color: 'primary',
        cifra: 27,
        icono: 'fas fa-boxes text-gray-300' ,
    }

    const totalAwards = {
        titulo: 'Total Categories',
        color: 'success',
        cifra: 3,
        icono: 'fas fa-list text-gray-300' ,
    }

    const actors = {
        titulo: 'Users quantity',
        color: 'warning',
        cifra: 10,
        icono: 'fa-user' ,
    }

    const cardProps = [ moviesInDb, totalAwards, actors]


    return (
        <>
            {/*<!-- Content Row Movies-->*/}
            <div className="row">

                {
                    cardProps.map( (cardProp, i ) => {
                        
                       return <SmallCart {...cardProp}  key={i} />

                    } )
                    
                }

            </div>
            {/*<!-- End movies in Data Base -->*/}
        </>
    )

}

export default ContentRowMovies