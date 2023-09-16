import styled from 'styled-components'

export const ContainerVehicles = styled.div`
    background-color: #0c0c0c;
    display: flex;
    padding: 30px;
    justify-content: center;
    align-items: center;
` 

export const VehiclesArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .car_area{
        height: 260px;
        margin: 20px;
        color: #c5c5c5; 
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        transition: transform .3s;
    }

    .car_area:hover{
        transform: scale(1.1);
    }

    h4{
        margin-top: 20px;
    }

    img{
        width: 230px;
        height: 120px;
    }

    h3{
        font-size: 30px;
        color: #c5c5c5;
    }
`