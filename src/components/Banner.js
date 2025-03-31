import axios from "../api/axios";
import React, { useEffect, useState } from 'react';
import requests from "../apo/requests";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    const request = await axios.get(requests.fetchNowPlaying)

    const movieId = request.data.result[
        Math.floor(Math.random() * request.data.results.length)
    ].id;

    const results = await axios.get(`movie/${movieId}` , {
        params: {append_to_reponse: "videos"},
    });
  };

  return <div></div>;
}
