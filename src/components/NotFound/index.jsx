import * as C from './styles'
import { Link } from "react-router-dom"
 
export const NotFound = () =>{
    return(
        <C.NotContainer>
            <div>
                <h1>Página não encontrada</h1>

                <Link to="/" className='link_not'><button>Voltar para Home</button></Link>
            </div>
        </C.NotContainer>
    )
}