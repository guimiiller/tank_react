import styled from 'styled-components'

export const ModalP1 = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0,0,0, 0.9);
    z-index: 1000;

    img{
        width: 500px;
        height: 300px;
    }

    @media(max-width: 768px){
        flex-direction: column;
        text-align: center;
    }

    @media(max-width: 425px){
        img{
            width: 300px;
            height: 180px;
        }
    }
`

export const ModalP1Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2{
        color: #c5c5c5;
        font-size: 40px;
    }

    h4{
        color: #c8c8c8;
        font-size: 20px;
    }

    button{
        margin: 20px 0 30px 0;
        padding: 12px 48px;
        background: transparent;
        border: 2px solid #c5c5c5;
        border-radius: 30px;
        color: #c5c5c5;
        font-size: 14px;
        cursor: pointer;
        transition: all ease .2s;
    }

    button:hover{
        background-color: #c5c5c5;
        color: #000;
    }

`

export const ModalP2 = styled.div`
    position: fixed;
    top: 40px;
    right: 50px;
    width: 10px;
    height: 10px;
    cursor: pointer;
    color: #c5c5c5;
    font-size: 30px;
    z-index: 1000;
`