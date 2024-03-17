import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Detalle from "./Detalle";
import Image from "react-bootstrap/Image";
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

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
                            <Col>
                                <div>
                                    <Card.Title className="" style={{ textAlign: "left", fontSize: "40px" }}>
                                        <FormattedMessage id="Nombre de Usuario"/>
                                    </Card.Title>
                                    <Card.Text className='d-flex flex-column' style={{ textAlign: "left", fontWeight: "bold" }}>
                                        <span className="mb-2">Juan Andres Jaramillo P.</span>
                                        <span>870 <FormattedMessage id="Publicaciones"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;496 <FormattedMessage id="Seguidores"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;112 <FormattedMessage id="Siguiendo"/></span>
                                    </Card.Text>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </div>
            </Card>
            <hr></hr>
            <div className="d-flex flex-row m-3">
                <Row className="d-flex flex-row">
                    <Col className="m-3">
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col className="m-3">
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col className="m-3">
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col className="m-3">
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col className="m-3">
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col className="m-3">
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col className="m-3">
                        <img src={"https://picsum.photos/350"} alt="random" />
                    </Col>
                    <Col className="m-3">
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col className="m-3">
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col className="m-3">
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col className="m-3">
                        <Link to="/Detalle">
                            <img src={"https://picsum.photos/350"} alt="random" />
                        </Link>
                    </Col>
                    <Col className="m-3">
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