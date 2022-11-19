import React from 'react'

const Footer = ({ colObj }) => {
    return (
        <div className='foot'>

            <p style={colObj}>    Hecho con Amor <i class='bx bxs-heart'></i> con Academlo por
                <a style={colObj} target="_blank" href=" https://portfolio-hfaleman.netlify.app/ "> Hector Falcón</a> </p>

        </div>
    )
}

export default Footer