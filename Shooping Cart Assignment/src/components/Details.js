import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
const Details = () => {
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.ProductsReducer);
    useEffect(() => {
       dispatch({type: 'PRODUCT', id})
    }, [id])

    return (
        <div className="container mt-100">
            <div className="row">
                <div className="col-6">
                <div className="details__image">
                    <img src={`/images/${product.image}`} alt=""/>
                </div>
                </div>
                <div className="col-6">
                <div className="details__name">
                    {product.name}
                </div>
                <div className="details__prices">
    <span className="details__actaul">₹{product.price}</span>
    <span className="details__discount">₹{product.discountPrice}</span>

                </div>  
                <div className="details__info">
                    <div className="details__incDec">
                
    <button className="btn" onClick={() => dispatch({type: 'ADD_TO_CART', payload: {product, quantity} })}>add to cart</button>
    </div>
                </div>
                <div className="details__p">
                    <h4>Details</h4>
                    {product.desc}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Details
