import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../providers/data";
import { UserContext } from "../../providers/user";
import apiPhotos from "../../services/apiPhotos";
import apiPlace from "../../services/apiPlace";
import urlImage from "../../utils/url";
import { createClient } from 'pexels';

const Destinations = () => {
  const { user } = useContext(UserContext);
  const { data } = useContext(DataContext);
  

  const client = createClient('563492ad6f91700001000001a840c37df18e46dc84e8ec72db69716e');

  if (data) {
    console.log(data.city)
    const client = createClient('563492ad6f91700001000001a840c37df18e46dc84e8ec72db69716e');
    data.city.forEach(place => {
      client.photos.search({ query: place, per_page: 1 }).then(photos => {
        console.log(photos.photos[0].alt)
        console.log(photos.photos[0].src.original)
      });
      
    });

    

  }


;

 
  return (
    <div>
      <h1>Dastinations</h1>
    </div>
  );
};

export default Destinations;
