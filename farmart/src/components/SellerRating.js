import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function SellerRating ({ farmer_id }) {
  ///const [rating, setRating] = useState[null];
  ///const [numOfRatings, setNumOfRatings] = useState(null);
  const sellerRatings = {
    seller1: { rating: 4.5, numOfRatings: 3 },
    seller2: { rating: 4.2, numOfRatings: 10 },
  };

  const rating = sellerRatings[farmer_id]?.rating || 0; 
  const numOfRatings = sellerRatings[farmer_id]?.numOfRatings || 0;  

  /*Funtion to fetch seller rating*/
  ///useEffect (() => {
    ///fetch ("/seller-rating/${farmer_id}")
    ///.then ((response) => response.json())
    ///.then ((data) => {
        /*After fetching the data, the animals are loaded, and the isLoaded state changes to true*/
        ///setIsLoaded(true);
        /*Sets the rating state with the fetched data */
        ///setRating(data.rating);
        ///setNumOfRatings(data.numOfRatings);
    ///})
    /*error handling that sets the isError state */
    ///.catch((error) => {
        ///setIsError(true);
        ///console.error('Error loading animals:', error);
    ///});
    ///fetchRating();
  ///}, [farmer_id]);

  return (
    <div>
      {rating !== null && (
        <>
          <div>Seller Rating:</div>
          <div>
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} style={{ color: i < Math.floor(rating) ? 'gold' : 'lightgray' }} />
            ))}
          </div>
          <p> ({rating.toFixed(1)}) - {numOfRatings} ratings</p>
        </>
      )}
    </div>
  );
};

export default SellerRating;