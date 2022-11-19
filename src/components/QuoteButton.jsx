import React from 'react'

const QuoteButton = ({ getNewValues, bkobj }) => {
    return (
        <button onClick={getNewValues} style={bkobj}   >
            {/* <i className='bx bx-right-arrow'></i> */}
            <i class='bx bxs-right-arrow'></i>
        </button>
    )
}

export default QuoteButton