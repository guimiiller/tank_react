import { Link } from 'react-router-dom'
import * as C from './styles'
import iconFace  from '../../assets/iconFace.png'
import iconInsta  from '../../assets/iconInsta.png'
import iconTwitter  from '../../assets/iconTwitter.png'
import iconCar from '../../assets/iconCar.png'
import iconEngine from '../../assets/iconEngine.png'
import iconTools from '../../assets/iconTools.png'
import iconBreak from '../../assets/iconBreak.png'
import backTank from '../../assets/bg_tank.jpg'
import { Car } from '../../data/Car'
import { useState } from 'react'
import Car1 from '../../assets/car1.png'
import Car3 from '../../assets/car3.png'

export const Home = () =>{
    return(
        <>
            <C.BannerContainer back={backTank}>
                <C.BannerText>
                    <h1>TANK</h1>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</h3>
                    <a href="#aboutLink">Know More</a>

                    <div className='icons'>
                        <img src={iconFace} alt="Facebook" />
                        <img src={iconInsta} alt="Instagram" />
                        <img src={iconTwitter} alt="Twitter" />
                    </div>
                </C.BannerText>
            </C.BannerContainer>
            <C.AboutContainerHome>
                <C.AboutTextHome id='aboutLink'>
                    <h2>About Us</h2>
                    <h4>Lorem Ipsum is simply dummy</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.</p>
                    <Link to='/about' ><button>Know More</button></Link>
                    <C.AboutIconsHome>
                        <div className='about_icons'>
                            <img src={iconCar} alt="" />
                        </div>
                        <div className='about_icons'>
                            <img src={iconBreak} alt="" />
                        </div>
                        <div className='about_icons'>
                            <img src={iconEngine} alt="" />
                        </div>
                        <div className='about_icons'>
                            <img src={iconTools} alt="" />
                        </div>
                    </C.AboutIconsHome>
                </C.AboutTextHome>
            </C.AboutContainerHome>
            <C.HomeVehicles>
                <C.HomeVehiclesText>
                    <h2>VEHICLES</h2>
                    <h4>Lorem Ipsum is simply dummy</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.</p>
                </C.HomeVehiclesText>
                <C.HomeVehiclesCars>
                    <div className='car_area'>
                        <img src={Car1} alt="Car"/>
                    </div>
                    <div className='car_area'>
                        <img src={Car3} alt="Car"/>
                    </div>
                </C.HomeVehiclesCars>
                <Link to='/vehicles'><button>More Vehicles</button></Link>
            </C.HomeVehicles>
        </>
    )
}