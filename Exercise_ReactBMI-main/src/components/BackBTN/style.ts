import styled from "styled-components";

export const BMIIcon = styled.div`
    height: 70px;
    width: 70px;
    background-color: #227C9D;
    border-radius: 50%;
    left: 5px;
    padding: 5px;
    position: absolute;

    :hover {
            background-color: green;
    }

    cursor: pointer;


    div {
        display: flex;
        justify-content: center;
        align-items: center;
        transform: scale(0.5);
    }

    @media only screen and (max-width: 920px) {
        width: 60px;
        height: 60px;
        
        transform: translate(-50%);
        bottom: -80px;
        left: 50%;
        
        
  
    }
`
