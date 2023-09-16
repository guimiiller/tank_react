import * as C from './styles'
import Img1 from '../../assets/about_img1.jpg'
import Img2 from '../../assets/about_img2.jpg'
import { Gallery } from '../../data/Gallery'
import { useState } from 'react'

export const About = () =>{
    const [photos, setPhotos] = useState(Gallery)

    return(
        <C.ContainerMain>
            <C.AboutContainer>
                <C.AboutText>
                    <h1>ABOUT US</h1>
                    <h3>Lorem Ipsum is simply dummy</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.
                    </p>
                </C.AboutText>
                <C.AboutImg1> <img src={Img1} alt="" /></C.AboutImg1>
                <C.AboutImg2> <img src={Img2} alt="" /></C.AboutImg2>
            </C.AboutContainer>
            
            <C.AboutGalleryContainer>
                <C.AboutGallery>
                    <h2>Gallery</h2>
                    <C.AboutPhotos>
                        {photos.map((item)=>(
                            <div className='gallery_area' key={item.id}>
                                <img src={item.url} alt={item.id} />
                            </div>
                        ))}
                    </C.AboutPhotos>
                </C.AboutGallery>
            </C.AboutGalleryContainer>
        </C.ContainerMain>
    )
}