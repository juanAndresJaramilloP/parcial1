import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import React from 'react';

function Detalle({image }) {
    return (
        <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
            <Card.Img
                style={{ height: "14rem" }}
                variant="top"
                src={image}
            />
        </Card>
    );
}

export default Detalle;