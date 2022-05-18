import React from 'react'
import ChartRow from './ChartRow'

const Chart = () => {

    let tableRowsData = [
        {
            Name: 'Salto en Paracaídas ',
            Price: '3000',
            PriceBefore: '2000',
            Categories: ['Aventura', 'Entretenimiento', 'Gastronomía'],
            SubCategories: ['Individual', 'Acompañado', 'Familiar']
        },
        {
            Name: 'Meet & Greet Lio Messi ',
            Price: '30000',
            PriceBefore: '20000',
            Categories: ['Aventura', 'Entretenimiento', 'Gastronomía'],
            SubCategories: ['Individual', 'Acompañado', 'Familiar']
        },

    ]
    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Precio Anterior</th>
                                    <th>Categoría</th>
                                    <th>Subcategoría</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Precio Anterior</th>
                                    <th>Categoría</th>
                                    <th>Subcategoría</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                
                                {
                                    tableRowsData.map((row,i) => {
                                     return  <ChartRow data = { row } key={i}/>     
                                    })
                                } 

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chart