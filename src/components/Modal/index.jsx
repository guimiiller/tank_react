import * as C from './styles'

export const Modal = ({ image, closeModal, id, price }) =>{
    return(
        <>
            <C.ModalP1 onClick={closeModal}>
                <img src={image} alt="" />
                <C.ModalP1Text>
                    <h2>TANK {id}</h2>
                    <h4>R$ {price}</h4>
                    <button>Buy Now</button> 
                </C.ModalP1Text>
            </C.ModalP1>
            <C.ModalP2 onClick={closeModal}>
                X
            </C.ModalP2>
        </>
    )
}