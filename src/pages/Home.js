import { Link, useNavigate } from "react-router-dom";

function HomePage(){

    /* useNavigate serve per navigare in modo programmatico e forza la navigazione dell'utente verso un'altra rotta
        per esempio usato alla fine di un timer per reindirizzare su un'altra pagina  */
    
    const navigate= useNavigate();

    function navigateHandler(){
        navigate('/products')
    }

    return (
    <>
        <h1>My Home Page</h1>
        <p>
            Go to <Link to="/products">the list of products</Link>.
        </p>
        <p>
            <button onClick={navigateHandler}>Navigate</button>
        </p>
    </>
    )
    
}

export default HomePage;