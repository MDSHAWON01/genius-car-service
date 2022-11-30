import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate()

    const handleToServiceDetail = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div className="container">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>price:{price}</p>
            <p> <small>{description}</small> </p>
            <button onClick={() => handleToServiceDetail(id)} className="btn btn-primary">Book:{name}</button>
        </div>
    );
};

export default Service;