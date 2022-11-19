import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({ quote, getNewValues, bkobj, colObj }) => {

    return (
        <article className='quoteBox' >
            <i style={colObj} class='bx bxs-quote-alt-left' ></i>
            <p style={colObj} >{quote.quote} </p>
            <h4 style={colObj}  >{quote.author} </h4>
            <section className='quoteBtn' >
                <QuoteButton getNewValues={getNewValues} bkobj={bkobj} />
            </section>


        </article>



    )
}

export default QuoteBox