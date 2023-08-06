import * as S from './style'

type Props = {
    Fction: (value: number) => void
}



export const Article = ({ Fction }: Props) => {

    const BMIvalue = () => {
        const height = document.querySelector('#height') as HTMLInputElement
        const weight = document.querySelector('#weight') as HTMLInputElement
    
        const BMI = Number(weight.value)/(Number(height.value)**2)

        Fction(BMI)
    }

    return (

        <S.article> 
            <h1> Calculate your BMI</h1>
            <p>IBM is a Body Mass Index, a parameter adopted by The World Health Organization (WHO) to calculate the ideal weight for each person</p>

            <div>
                <input type="text" name="height" id="height" placeholder='Write your height Ex 1.8 (in meters)'/> <br />
                <input type="text" name="weight" id="weight" placeholder='Write you Weight Ex 80 (in kg)'/>
                <button onClick={BMIvalue}> Calculation</button>
            </div>
            

            
        </S.article>
    )
}