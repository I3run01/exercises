import * as S from './style'


type Props = {
    bg: string
    image: string
    title: string
    ResponseWeight: string
    subtittle: string

    
}

export const BMIICon = ({bg, image, title, ResponseWeight, subtittle}: Props) => {

    return (
        <S.BMIIcon bg={bg} id="BMIIcon">
            <div><img src={image} alt="" /></div> 
            <h1>{title}</h1>
            <h2>{ResponseWeight}</h2>
            <h3>{subtittle}</h3>            
        </S.BMIIcon>
    )
}