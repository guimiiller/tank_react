import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100%;
    background-color: #0c0c0c;

    .navigation {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 40px;
        max-width: 1140px;
        transition: all 0.5s;
    }

    .navigation .logo{
        font-size: 30px;
        font-weight: 600;
        text-transform: uppercase;
        color: #c5c5c5;
    }

    .navigation ul {
        display: flex;
        align-items: center;
        gap: 5rem;
    }

    .navigation ul li a {
        font-size: 14px;
        font-weight: 500;
        transition: all 0.5s;
        color: #c5c5c5;
        text-transform: uppercase;
    }

    .navigation ul li a:hover{
        color: #9d9d9d;
    }

    .menu {
        cursor: pointer;
        display: none;
    }

    .menu .bar {
        display: block;
        width: 28px;
        height: 3px;
        border-radius: 3px;
        background-color: #c5c5c5;
        margin: 5px auto;
        transition: all 0.3s;
    }

    @media (max-width: 2560px){
        .navigation{
            padding: 18px 20px;
            max-width: unset;
        }
    
        .menu{
            display: block;
            z-index: 999;
        }
    
        .menu.active .bar:nth-child(1){
            transform: translateY(8px) rotate(45deg);
            background-color: #c5c5c5;
        }
    
        .menu.active .bar:nth-child(2){
            opacity: 0;
            background-color: #c5c5c5;
        }
    
        .menu.active .bar:nth-child(3){
            transform: translateY(-8px) rotate(-45deg);
            background-color: #c5c5c5;
        }
    
        .nav_menu{
            position: fixed;
            right: -100%;
            top: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background-color: #0c0c0c;
            gap: -10px;
            transition: 0.3s;
        }

        .nav_menu.active{
            right: 0;
        }
    
        .nav_item{
            margin: 16px 0;
        }
    }

`