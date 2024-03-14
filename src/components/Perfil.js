import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

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
                <Card.Subtitle className="mb-5">Usa tu cuenta Uniandes</Card.Subtitle>
                <Form style={{ width: '70%' }}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" value={email} onChange={handleEmailChange} isInvalid={!isEmailValid} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre Completo</Form.Label>
                        <Form.Control type="text" placeholder="Nombre Completo" value={email} onChange={handleEmailChange} isInvalid={!isEmailValid} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Descripcion del perfil</Form.Label>
                        <Form.Control type="text" placeholder="Descripcion del perfil" value={email} onChange={handleEmailChange} isInvalid={!isEmailValid} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Url pagina personal</Form.Label>
                        <Form.Control type="text" placeholder="Url pagina personal" value={email} onChange={handleEmailChange} isInvalid={!isEmailValid} />
                    </Form.Group>
                    <div className='d-flex flex-row'>
                        <Button variant="outline-light m-2" onClick={clickNext} style={{ border: '1px solid red', width:"100%", color: 'black' }}>
                            Guardar Cambios
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>

    );
}

export default Perfil;