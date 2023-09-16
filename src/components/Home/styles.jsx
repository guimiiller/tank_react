import styled from 'styled-components'

export const BannerContainer = styled.div(({back})=>(`
    height: calc(100vh - 64px);
    background-image: linear-gradient(rgba(0,0,0,0.67), rgba(0,0,0,0.67)),url(${back});
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;

    @media (max-width: 768px){
        text-align: center;
        justify-content: center;
    }
`))

export const BannerText = styled.div
    `
    color: #c5c5c5;
    width: 35%;
    margin: 80px 0 50px 40px;


    h1{
        font-size: 60px;
    }

    h3{
        font-size: 14px;
        margin: 8px 0 30px 0;
        line-height: 25px;
    }

    a{
        padding: 12px 52px;
        background: transparent;
        border: 2px solid #c5c5c5;
        border-radius: 30px;
        color: #c5c5c5;
        font-size: 15px;
        cursor: pointer;
        transition: all ease .2s;
    }

    a:hover{
        background-color: #c5c5c5;
        color: #000;
    }

    .icons{
        display: flex;
        flex-direction: column;
        margin-top: 40px;
    }

    .icons img {
        width: 25px;
        margin: 10px;
        cursor: pointer;
        transition: transform .3s;
    }

    .icons img:hover{
        transform: scale(1.1);
    }

    @media (max-width: 768px){
        margin: 0;
        width: 100%;

        h1{
            margin-bottom: 30px;
        }

        .icons{
            flex-direction: row;
            justify-content: center;    
        }
    }

    @media (max-width: 560px){
        button{
            padding: 10px 45px;
            font-size: 10px;
        }

        h1{
            font-size: 35px;
        }

        h3{
            display: none;
        }
    }

`

export const AboutContainerHome = styled.div`
    background-color: #0c0c0c;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    
`

export const AboutTextHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 50%;
    color: #c5c5c5;

    h2{
        font-size: 27px;
        text-transform: uppercase;
    }

    h4{
        font-size: 16px;
        line-height: 30px;
    }

    p{
        font-size: 12px;
        margin: 8px
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

    button:hover{
        background-color: #c5c5c5;
        color: #000;
    }

    @media (max-width: 560px){
        h2{
            font-size: 24px;
        }

        h4{
            display: none;
        }

        p{
            display: none;
        }
    }
`

export const AboutIconsHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

    .about_icons{
        background-color: #111;
        padding: 13px;
        border-radius: 50%;
        margin: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform .3s;
        cursor: pointer;
    }

    .about_icons:hover{
        transform: scale(1.1);
    }

    img{
        width: 35px;
    }

    @media (max-width: 434px){
        flex-direction: column;
    }
    
`

export const HomeVehicles = styled.div`
    background-color: #0c0c0c;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 40px;

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

export const HomeVehiclesText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 50%;
    color: #c5c5c5;
    padding: 30px;

    h2{
        font-size: 27px;
        text-transform: uppercase;
    }

    h4{
        font-size: 16px;
        line-height: 30px;
    }

    p{
        font-size: 10px;
    }

    @media (max-width: 560px){
        h2{
            font-size: 24px;
        }

        h4{
            font-size: 12px;
            display: none;
        }

        p{
            display: none;
        }
        
    }
    
`

export const HomeVehiclesCars = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .car_area{
        margin: 30px;
        color: #c5c5c5; 
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }


    img{
        width: 230px;
    }
`