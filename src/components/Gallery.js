import React, {useState} from 'react'
import './Gallery.css'
import CloseIcon from '@mui/icons-material/Close';


const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: '/images/img1.jpeg'
        },
        {
            id: 2,
            imgSrc: '/images/img2.jpeg'
        },
        {
            id: 3,
            imgSrc: '/images/img3.jpeg'
        },
        {
            id: 4,
            imgSrc: '/images/img4.jpeg'
        },
        {
            id: 5,
            imgSrc: '/images/img5.jpeg'
        },
        {
            id: 6,
            imgSrc: '/images/img6.jpeg'
        },
        {
            id: 7,
            imgSrc: '/images/img7.jpeg'
        },
        {
            id: 8,
            imgSrc: '/images/img8.jpeg'
        },
        {
            id: 9,
            imgSrc: '/images/img9.jpeg'
        },
        {
            id: 10,
            imgSrc: '/images/img10.jpeg'
        },
        {
            id: 11,
            imgSrc: '/images/img11.jpeg'
        },
        {
            id: 12,
            imgSrc: '/images/img12.jpeg'
        },
        {
            id: 13,
            imgSrc: '/images/img13.jpeg'
        },
        {
            id: 14,
            imgSrc: '/images/img14.jpeg'
        },
        {
            id: 15,
            imgSrc: '/images/img15.jpeg'
        }
    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        
        setTempImgSrc(imgSrc);
        setModel(true);
    }

  return (
    <>
    <div className={model ? "model open" : "model"}>   
        <img src={tempImgSrc} alt=''/>
        <CloseIcon onClick={() => setModel(false)}/>
    </div>

    <div className='gallery'>
        {   data.map((item, index) => {
            return (
                <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                    <img src={item.imgSrc} alt='' style={{width:'100%'}}/>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Gallery
