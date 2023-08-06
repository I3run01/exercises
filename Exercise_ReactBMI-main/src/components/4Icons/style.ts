import styled from "styled-components";

export const FourIcons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    #line1 {
        padding: 0px;
        width: 100%;
        display: flex;
        justify-content: space-around;

        
    }

    #line2 {
        padding: 0px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        margin-top: 30px;
    }
    


    #BMIIcon {
        width: 210px;
        height: 250px;

        img {
            width: 20px;
        }

        div {
            width: 20px;
            height: 20px;
        }

        h1 {
            margin-top: 20px;
            font-size: 1.4em;
        }

        h3 {
            margin-top: 20px;
            font-size: 0.8em;
        }

    }

    @media only screen and (max-width: 920px) {
        display: none;
    }
    
`