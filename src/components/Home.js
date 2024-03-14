import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Detalle from "./Detalle";
import Image from "react-bootstrap/Image";
import { Link } from 'react-router-dom';
function Home() {

    return (
        <div className="container">
            <Card style={{ width: "100%", height: "14rem", backgroundColor: '#dee2ea' }} className="mb-3">
                <div className='d-flex flex-row'>
                    <Card.Body>
                        <Row>
                            <Col xs={6} md={4}>
                                <Link to="/Perfil">
                                    <Image src={"https://picsum.photos/350"} style={{ width: "50%" }} roundedCircle />
                                </Link>
                            </Col>
                        </Row>
                        <Card.Title>
                            Username
                        </Card.Title>
                        <Card.Text className='d-flex flex-row'>
                            <span style={{ fontWeight: "bold" }}>Juan Andres Jaramillo P.</span>
                            <br />
                            <span style={{ fontWeight: "bold" }}> 870 Posts</span>
                            <span style={{ fontWeight: "bold" }}> 496 Followers</span>
                            <span style={{ fontWeight: "bold" }}> 112 Following</span>
                        </Card.Text>
                    </Card.Body>
                </div>
            </Card>
            <hr></hr>
            <div className="d-flex flex-row">
                <Row className="d-flex flex-row">
                    <Col>
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col>
                        <img src={"https://picsum.photos/350"} alt="random" />
                    </Col>
                    <Col>
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Home;