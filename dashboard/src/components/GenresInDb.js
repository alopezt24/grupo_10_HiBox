import React from 'react'
import CartGenre from './CartGenre'

const GenresInDb = () => {

    const genres = [ 'Aventura','Entretenimiento','Gastronomía']

    return (
        <>
            {/*<!-- Genres in DB -->*/}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Categories in Data Base</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            
                            {
                                genres.map((genre,i) => {

                                     return <CartGenre genre= { genre } key={i}/>
                                    
                                })
                            }


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenresInDb