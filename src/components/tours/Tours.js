import Tour from './tour/Tour';
import { Link } from 'react-router-dom';

function Tours(props){

    return(
        <>
          {
             props.data.map(element=>{
                return(
                    <Link to={`/city/${element.id}`}>
                        <Tour key={element.id} city={element}/>
                    </Link>
                );
             })

            }
        </>
    );
}

export default Tours;

                    // <div>
                    //     <h4>{element.name}</h4>
                    //     <img src={element.image} alt={element.name} width="500" height="600"/>
                    // </div>