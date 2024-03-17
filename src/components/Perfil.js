import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import { FormattedMessage } from 'react-intl';

const userLanguage = navigator.language || navigator.userLanguage;

function Perfil() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [isEmailValid, setValidationStates] = useState(true);

    const validateEmail = (email) => {
        const isValid = (email.length > 0 && email.includes('@'));
        setValidationStates(isValid);
        return isValid;
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const clickNext = () => {
        const dataToSend = email;
        if (validateEmail(email)) {
            navigate('/acceder2', {
                state: { email: dataToSend }
            });
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
            <Card className="d-flex justify-content-center align-items-center" style={{ border: '1px solid grey', borderRadius: '3px', width: '40%' }}>
                <Card.Title className="m-3">
                    <Image src={"https://picsum.photos/350"} style={{ width: "50%" }} roundedCircle />
                </Card.Title>
                <Card.Subtitle className="mb-5"><FormattedMessage id="Usa tu cuenta Uniandes"/></Card.Subtitle>
                <Form style={{ width: '70%' }}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label><FormattedMessage id="Nombre de Usuario"/></Form.Label>
                        <Form.Control type="text" placeholder={userLanguage.startsWith("es") ? "Nombre de Usuario" : "Username"} value={email} onChange={handleEmailChange} isInvalid={!isEmailValid} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label><FormattedMessage id="Nombre Completo"/></Form.Label>
                        <Form.Control type="text" placeholder={userLanguage.startsWith("es") ? "Nombre Completo" : "Full Name"} value={email} onChange={handleEmailChange} isInvalid={!isEmailValid} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label><FormattedMessage id="Descripcion del perfil"/></Form.Label>
                        <Form.Control type="text" placeholder={userLanguage.startsWith("es") ? "Descripcion del perfil" : "Profile Description"} value={email} onChange={handleEmailChange} isInvalid={!isEmailValid} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label><FormattedMessage id="Url pagina personal"/></Form.Label>
                        <Form.Control type="text" placeholder={userLanguage.startsWith("es") ? "Url pagina personal" : "Url Personal Page"} value={email} onChange={handleEmailChange} isInvalid={!isEmailValid} />
                    </Form.Group>
                    <div className='d-flex flex-row'>
                        <Button variant="outline-light m-2" onClick={clickNext} style={{ border: '1px solid red', width:"100%", color: 'black' }}>
                            <FormattedMessage id="Guardar Cambios"/>
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>

    );
}

export default Perfil;