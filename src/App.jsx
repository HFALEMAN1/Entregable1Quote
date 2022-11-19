import QuoteBox from "./components/QuoteBox"
import quoteDB from "./db/quotes.json"
import colors from "./db/colors.js"
import { useState } from "react"
import QuoteButton from "./components/QuoteButton"
import Footer from "./components/Footer"
function App() {



  const getRandom = (array) => {
    const randomIndex = Math.floor(array.length * Math.random(20))
    return array[randomIndex]
  }


  const [quote, setQuote] = useState(getRandom(quoteDB))/*colocar cita aleatoria por default*/

  const [color, setColor] = useState(getRandom(colors))


  const getNewValues = () => {
    const newQuote = getRandom(quoteDB)/*aunn no entiendo bien esta parte/actualizacion un poco*/
    const newColor = getRandom(colors)
    setQuote(newQuote)
    setColor(newColor)/*aprovechamos el boton para hacer dos cambios*/

  }

  const bkobj = {
    backgroundColor: color
  }

  const colObj = {
    color: color
  }

  return (
    <div className="App" style={bkobj} >

      <div>       <QuoteBox
        quote={quote}
        getNewValues={getNewValues}
        bkobj={bkobj}
        colObj={colObj}
      />         </div>



      <div>
        <Footer
          colObj={colObj} />
      </div>

    </div>
  )
}

export default App
