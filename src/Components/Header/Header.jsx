import React, { useState, useEffect } from "react";
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import '../../App.css';
import styles from "./Header.scss"

/*const backgroundImage = "/images/img-1.jpg";


export default function Home() {
    OKH8upQqIUgXMze7T7VLqO9CeZ4BTPcFh5oC1hB6BcmIWiosRKNu1Ygs
    return (
      <div className={styles.container}>
        <div className={styles.text}>WELCOME</div>
        <img src={backgroundImage} alt="Background" />
      </div>
    );
}*/

function HeaderCarousel() {
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      const fetchImages = async () => {
        const apiKey = "OKH8upQqIUgXMze7T7VLqO9CeZ4BTPcFh5oC1hB6BcmIWiosRKNu1Ygs"; 
        const url = "https://api.pexels.com/v1/curated?per_page=6"; 
  
        try {
          const response = await axios.get(url, {
            headers: {
              Authorization: apiKey // 
            }
          });
  
          setImages(response.data.photos);
        } catch (error) {
          console.error("Error al obtener las imágenes:", error);
        }
      };
  
      fetchImages();
    }, []);
  
    return (
      
            <Carousel style={{ height: "1000px", overflow: "hidden" }}>
              {images.map((image, index) => (
                <Carousel.Item key={index} style={{ height: "1000px", overflow: "hidden" }}>
                  <img
                    className="d-block w-100"
                    src={image.src.medium}
                    style={{ maxHeight: "1000px", objectFit: "cover" }}
                    alt={`Slide ${index}`}
                  />
                  <Carousel.Caption>
                    <h3>{image.photographer}</h3>
                    <p>{image.photographer_url}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          );
        }
        
        export default HeaderCarousel;