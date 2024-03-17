import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import React from 'react';

function Detalle({ image }) {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Card className="m-3" style={{ width: "100%"}}>
                <Card.Img
                    variant="top"
                    src={"https://picsum.photos/1080"}
                />
            </Card>
        </div>
    );
}

export default Detalle;