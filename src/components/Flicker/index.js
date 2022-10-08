import styles from "./index.module.css";
import { useEffect, useState } from "react";
import fetchJsonp from 'fetch-jsonp'
import { useParams } from "react-router-dom";


const Flicker = () => {
  const [images, setImages] = useState([]);
  const params = useParams();
  const { content } = params;

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    fetchJsonp(
      `https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&tags=${content || ''}`,
      { jsonpCallback: 'jsoncallback' }
    )
      .then(res => res.json())
      .then(({ items }) => {
        setImages(items)
      })
      .catch(() => {
        setImages([])
      })
  }

  return (
    <main className={styles["image-container"]}>
      {images.map((image, index) => (
        <img key={index} loading="lazy" src={image.media.m} className={styles["image"]} />
      ))}
    </main>
  );
};

export default Flicker;
