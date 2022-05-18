import React from 'react'

const ChartRow = ({data}) => {
    return (
        <>
            <tr>
                <td>{data.Name}</td>
                <td>{data.Price}</td>
                <td>{data.PriceBefore}</td>
                <td>
                    <ul>
                        {
                            data.Categories.map((category, i) =>
                            
                                <li key={`category ${i}`}>{category}</li>)
                                
                        }
                    </ul>
                </td>
                <td>
                    <ul>
                        {
                            data.SubCategories.map((subCategory, i) =>
                            
                                <li key={`subCategory ${i}`}>{subCategory}</li>)
                                
                        }
                    </ul>
                </td>
            </tr>

        </>
    )
}

export default ChartRow