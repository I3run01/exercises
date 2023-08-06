import { useState } from 'react'
import * as S from './style'

type Props = {
    HideBTN: () => void
}

export const BackBTN = ({HideBTN}: Props) => {
    const [show, setShow] = useState(true)

    const hidebutton = function() {
        HideBTN()
    }
 
 
    return (
        
        <S.BMIIcon onClick={hidebutton}>
            <div><img src="images/leftarrow.png" alt="" /></div>  
        </S.BMIIcon>
    )
}