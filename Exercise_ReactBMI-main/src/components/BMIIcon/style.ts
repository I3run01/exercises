import styled from "styled-components";

type BMIProps = {
    bg: string
}

export const BMIIcon = styled.div<BMIProps>`

    width: 80%;
    height: auto;
    background-color: ${props => props.bg};
    border-radius: 20px;

    div {
        margin: 10% auto auto auto;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        padding: 20px;
        background-color: #262626;
        opacity: 0.5;
        display: flex;
        justify-content: baseline;
        align-items: center;
    }
    
    img {
        margin: auto;
        width: 70%;
    }

    h1, h2, h3 {
        text-align: center;
        color: white;
        
    }

    h1, h2 {
        margin: 5px;
    }

    h1 {
        font-weight: bolder;
        font-size: 2.2em;
    }

    h2 {
        font-size: 1.4em;
    }

    h3 {
        font-size: 0.7em;
        margin: 40px;
    }

    @media only screen and (max-width: 920px) {
        width: 300px;

    }

`