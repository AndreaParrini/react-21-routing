import { useParams, Link } from "react-router-dom";

function ProductDetailPage(){

    const params = useParams();

    return <>
    <h1>Product Detail Page</h1>
    <p>
        {params.productId}
    </p>
    <p>
        <Link to='..' relative='path'>Back</Link> 
        {/* 
        Per default il link ha come prop in relative il valore route, in questo modo gli stiamo dicendo di tornnare indietro di un livello nel percorso 
        E quindi passera da /products/p1 a /products
        Se lasciavamo route tornava alla rotta precedente che era semplicemente / e quindi tornava in home page.
        */}
    </p>
    
    </>
}

export default ProductDetailPage;