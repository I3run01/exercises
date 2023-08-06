import * as S from './style'
import { BMIICon } from '../BMIIcon'

export const FourIcons = () => {

    return (
        <S.FourIcons>
            <div id='line1'>
                <BMIICon
                    bg='#90908e' //gray
                    image='./images/down.png'
                    title='Too lean'
                    ResponseWeight = {``}
                    subtittle = 'BMI is less than 18.5'
                ></BMIICon>
                <BMIICon
                    bg='#62c83a' //green
                    image='./images/up.png'
                    title='Normal'
                    ResponseWeight = {``}
                    subtittle = 'BMI is between 18.5 and 24.9'
                ></BMIICon>
            </div> 
            <div id='line2'>
                <BMIICon
                    bg='#835b16' //orange - yellow
                    image='./images/down.png'
                    title='Over weight'
                    ResponseWeight = {``}
                    subtittle = 'BMI is between 24.9 and 30'
                ></BMIICon>
                <BMIICon
                    bg='#800202' //red
                    image='./images/down.png'
                    title='Too Over weight'
                    ResponseWeight = {``}
                    subtittle = 'BMI is more than 30'
                ></BMIICon>
            </div>

            

              
        </S.FourIcons>
       
    )
}