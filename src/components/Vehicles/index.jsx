import * as C from './styles'
import { useState } from 'react'
import { Car } from '../../data/Car.jsx'
import { Modal } from '../Modal'


export const Vehicles = () =>{
    const [carItem, setCarItem] = useState(Car)
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [imageOfModal, setImageOfModal] = useState('')
    const [idModal, setIdModal] = useState('')
    const [priceModal, setPriceModal] = useState('')

    const openModal = (id) =>{
        const carPhoto = carItem.find(item => item.id === id)
        if(carPhoto){
            setImageOfModal(carPhoto.url)
            setIdModal(carPhoto.id)
            setPriceModal(carPhoto.price)
            setShowModal(true)
        }
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return(
        <C.ContainerVehicles>
            <C.VehiclesArea>
                {loading &&
                    <h3>Carregando...</h3>
                }

                {!loading && carItem.length > 0 &&
                    <>
                        {carItem.map((item)=>(
                            <div className='car_area' key={item.id} onClick={() => openModal(item.id)}>
                                <img src={item.url} alt="Car" />
                                <h4>TANK {item.id}</h4>
                                R$ {item.price}
                            </div>
                        ))}
                    </>
                }

                {showModal &&
                    <Modal image={imageOfModal} closeModal={closeModal} id={idModal} price={priceModal}/>
                }

                {!loading && carItem.length === 0 &&
                    <h3>Não há carros para exibir.</h3>
                }
            </C.VehiclesArea>
        </C.ContainerVehicles>
    )
}