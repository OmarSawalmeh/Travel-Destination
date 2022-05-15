

function Tour(props){

    return(
        <>
            <div>
                <h1>{props.city.name}</h1>
                <img src={props.city.image} alt={props.city.name} width="500" height="600"/>
                <br></br>
                <hr></hr>
            </div>

        </>

    );
}

export default Tour;