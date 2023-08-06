import * as G from './GlobalStyles'
import { Nav } from './components/Nav'
import { Article } from './components/Article'
import { BMIICon } from './components/BMIIcon'
import { FourIcons } from './components/4Icons'
import { BackBTN } from './components/BackBTN'
import { useState } from 'react'

function App() {
  
  const [showTL, setShowTL] = useState(false)
  const [showN, setShowN] = useState(false)
  const [showOW, setShowOW] = useState(false)
  const [showTOW, setShowTOW] = useState(false)
  const [showFI, setShowFI] = useState(true)
  const [showBackBTC, setShowBackBTN] = useState(false)

  const [BMI, SetBMI] = useState(0)

  const BMIShow = (value: number) => {
    if(isNaN(value) == true || value == Infinity) value = 0
    else SetBMI(Number(value.toFixed(2)))

    if (value != 0) setShowBackBTN(true)
    else setShowBackBTN(false)

    if(value == 0) {
      setShowTL(false)
      setShowN(false)
      setShowOW(false)
      setShowTOW(false)
      setShowFI(true)
    }
    if(value > 0 && value < 18.5) {
      setShowTL(true)
      setShowN(false)
      setShowOW(false)
      setShowTOW(false)
      setShowFI(false)
    }
    if(value >= 18.5 && value < 24.9 ) {
      setShowTL(false)
      setShowN(true)
      setShowOW(false)
      setShowTOW(false)
      setShowFI(false)
    }
    if(value >= 24.9 && value < 30 ) {
      setShowTL(false)
      setShowN(false)
      setShowOW(true)
      setShowTOW(false)
      setShowFI(false)
    }
    if(value >= 30) {
      setShowTL(false)
      setShowN(false)
      setShowOW(false)
      setShowTOW(true)
      setShowFI(false)

    }
  }

  const ShowBackBTC = () => {
    setShowBackBTN(false)
    setShowTL(false)
    setShowN(false)
    setShowOW(false)
    setShowTOW(false)
    setShowFI(true)

  }

  return (
    <div>
      <G.main>
        <Nav></Nav>
        <G.FlexDiv>
          <Article  Fction={BMIShow} ></Article>
          <G.Aside>
            {showTL &&
              <BMIICon
                bg='#90908e' //gray
                image='./images/down.png'
                title='Too lean'
                ResponseWeight = {`Your BMI is ${BMI} kg/m²`}
                subtittle = 'BMI is less than 18.5'
              ></BMIICon>
            }
            {showN &&
              <BMIICon
                bg='#62c83a' //green
                image='./images/up.png'
                title='Normal'
                ResponseWeight = {`Your BMI is ${BMI} kg/m²`}
                subtittle = 'BMI is between 18.5 and 24.9'
              ></BMIICon>
            }
            {showOW &&
              <BMIICon
                bg='#835b16' //orange - yellow
                image='./images/down.png'
                title='Over weight'
                ResponseWeight = {`Your BMI is ${BMI} kg/m²`}
                subtittle = 'BMI is between 24.9 and 30'
              ></BMIICon>
            }
            {showTOW &&
              <BMIICon
                bg='#800202' //red
                image='./images/down.png'
                title='Too Over weight'
                ResponseWeight = {`Your BMI is ${BMI} kg/m²`}
                subtittle = 'BMI is more than 30'
              ></BMIICon>
            }
            {showFI && 
              <FourIcons></FourIcons>
            }

            {showBackBTC &&
              <BackBTN HideBTN={ShowBackBTC} ></BackBTN>
            }
          </G.Aside>
        </G.FlexDiv>
      </G.main>
    </div>
  )
}

export default App
