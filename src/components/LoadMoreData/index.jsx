import { useEffect, useState, useRef } from "react";
import './styles.css';


export default function LoadMoreData() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(20);
    const [disableButton, setDisableButton] = useState(false);
    const effectRan = useRef(false);

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${count === 0 ? 0 : count * limit}`)

            const result = await response.json();
            console.log(result);

            if (result && result.products && result.products.length) {
                setProducts((prevData) => [...prevData, ...result.products]);
            }

        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        if (effectRan.current === true || process.env.NODE_ENV === 'production') {
            fetchProducts();
        }
        return () => {
            effectRan.current = true;
        }
    }, [count]);

    useEffect(() => {
        if (products && products.length === 100) setDisableButton(true);
    }, [products])

    return <div className="container-fluid">
        <div className="product-container">
            {
                (products && products.length) ? products.map(item => <div className="product" key={item.id}>
                    <img src={item.thumbnail} alt={item.title} />
                    <p>{item.title}</p>
                </div>) :
                    <div>
                        No items
                    </div>
            }
        </div>
        <div className="button-container">
            <button disabled={disableButton} onClick={() => setCount(count + 1)} className="btn btn-info mx-2">Load More Products</button>
            {
                disableButton ? <p className="mt-3">You have reached 100 products</p> : null
            }
        </div>
    </div >
}