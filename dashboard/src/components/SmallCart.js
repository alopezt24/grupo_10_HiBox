import React from 'react'
import PropTypes from 'prop-types';

const SmallCart = (props) => {
    console.log(props);
    
    return (
        <>
            {/*<!-- Movies in Data Base -->*/}
            <div className="col-md-4 mb-4">
            <div className={`card border-left-${props.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}> {props.titulo}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${props.icono} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

SmallCart.defaultProps = {
    titulo: 'No Title',
    color: 'success',
    cifra: 'No cuatity',
    icono: 'fa-clipboard-list'
}

/* PROPTYPES */

SmallCart.propTypes = {
    atritutes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        cuantity: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        icon: PropTypes.string.isRequired
    })
}

export default SmallCart