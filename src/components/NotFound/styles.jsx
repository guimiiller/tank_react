import styled from 'styled-components'

export const NotContainer = styled.div`
    height: calc(100vh - 64px);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #0c0c0c;
    color: #c5c5c5;

    button{
        margin: 20px 0 30px 0;
        padding: 10px 50px;
        background: transparent;
        border: 2px solid #c5c5c5;
        border-radius: 30px;
        color: #c5c5c5;
        font-size: 15px;
        cursor: pointer;
        transition: all ease .2s;
    }

    button:hover{
        background-color: #c5c5c5;
        color: #000;
    }

`