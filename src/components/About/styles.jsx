import styled from 'styled-components'

export const ContainerMain = styled.div`
    background-color: #0c0c0c;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0;

    @media(max-width: 672px){
        flex-direction: column;
        text-align: center
    }
`

export const AboutText = styled.div
    `
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 30%;
    color: #c5c5c5;

    h1{
        font-size: 27px;
    }

    h3{
        font-size: 16px;
        line-height: 30px;
    }

    p{
        font-size: 12px;
        margin-top: 8px
    }

    @media(max-width: 375px){
        h1{
            font-size: 25px;
        }
    
        h3{
            font-size: 13px;
            line-height: 30px;
        }
    
        p{
            font-size: 10px;
            margin-top: 8px
        }
    }
`

export const AboutImg1 = styled.div`
    margin: 0 10px 0 30px;
    img{
        width: 180px;
        height: 300px;
        object-fit: cover;
    }

    @media(max-width: 672px){
        margin: 30px 0 10px 0;
    }
`   

export const AboutImg2 = styled.div`
    margin-top: 80px;
    img{
        width: 180px;
        height: 300px;
        object-fit: cover;
    }

    @media(max-width: 672px){
        margin: 0;
    }
`

export const AboutGalleryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    background-color: #0c0c0c;
`

export const AboutGallery = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 80px 0 20px 0;
    color: #c5c5c5;

    h2{
        font-size: 30px;
        text-transform: uppercase;
        margin-bottom: 30px;
    }

    @media(max-width: 375px){
        h2{
            font-size: 27px;
        }
    }
`

export const AboutPhotos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    img{
        width: 220px;
        margin: 4px;
        object-fit: cover;
        transition: transform .3s;
        cursor: pointer;
    }

    img:hover{
        transform: scale(1.1);
    }
`