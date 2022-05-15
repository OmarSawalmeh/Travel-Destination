
import { Link, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function TourDetails(props){
    let { id } = useParams();
    let dataFilter = props.data.filter(element=> element.id === id);
    
    const [showMore, setShowMore] = useState(false);

    return(
        <>
          <div>
              <Header/>
              <br></br>
              <br></br>
          </div>
          <div className="Details">
              <div>
                  <h1>{dataFilter[0].name}</h1>
                  <img src={dataFilter[0].image} alt={dataFilter[0].name} width="500" height="600"/>
              </div>
              <div>
                  <h4>Price: {dataFilter[0].price}$</h4>
                  <p>
                      {showMore?dataFilter[0].info: `${dataFilter[0].info.substring(0, 200)}...`}
                      <button className="btn" onClick={()=> setShowMore(!showMore)}>
                        {showMore?"Show Less":"Show More"}
                      </button>
                  </p>

              </div>
          </div>
          <div>
              <Footer/>
          </div>
        </>
    );
}

export default TourDetails;
