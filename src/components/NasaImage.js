import React, { useState, useEffect } from "react";
import ImageContainer from "./ImageContainer";
import ImageInfo from "./ImageInfo";
import axios from "axios";
import YoutubeEmbed from "./YoutubeEmbed";
import { BASE_URL, API_KEY } from "../constants/constants";

function NasaImage () {
    const [image, setImage] = useState({});

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
            .then(res => {
                console.log(res);
                const media = res.data;
                setImage(media);
                console.log(media);
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <>
            {(image["media_type"] === "video") ? <YoutubeEmbed url={ image.url } /> : <ImageContainer imageUrl={"image.url"} />}
            <ImageInfo />
        </>
    )
}

export default NasaImage;