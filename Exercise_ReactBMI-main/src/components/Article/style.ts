import styled from "styled-components";

export const article = styled.article`
    text-align: left;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
        font-size: 2em;
    }

    p {
        font-size: 1em;
    }

    input {
        width: 100%;
        margin-top: 20px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-width: 1px;
        height: 20px;
    }

    button {
        margin-top: 50px;
        width: 100%;
        height: 50px;
        border-radius: 10px;
        border: none;

        background-color: #227C9D;
        color: white;

        font-size: 1.2em;

        :hover {
            background-color: green;
            cursor: pointer;
        }
        
    }

    @media only screen and (max-width: 920px) {
        width: max-content;
        margin: auto;
    }

`