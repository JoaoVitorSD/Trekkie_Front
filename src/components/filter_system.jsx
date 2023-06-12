import "bootstrap/dist/css/bootstrap.min.css";

import styles from "src/styles/filter_system.module.css";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';

function FilterSystem() {
    return (
        <Container className={styles["filter-system-container"]}>
            <Form>
                <Row className={styles["filter-system-rows"]}>
                    <Col className={styles["filter-system-cols"]}>
                        <Form.Group className="mb-3" controlId="activity_type">
                            <Form.Label> Tipo de atividade </Form.Label>
                            <Form.Select>
                                <option> Caminhada </option>
                                <option> Ciclismo </option>
                                <option> Corrida </option>
                                <option> Escalada </option>
                                <option> Trilha </option>
                                <option> Surf </option>
                                <option> Canoagem </option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col className={styles["filter-system-cols"]}>
                        <Form.Group className="mb-3" controlId="activity_region">
                            <Form.Label> Região da atividade </Form.Label>
                            <Form.Select>
                                <option> Todas </option>
                                <option> Barreiro </option>
                                <option> Pampulha </option>
                                <option> Centro </option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col className={styles["filter-system-cols"]}>
                        <Form.Group className="mb-3" controlId="activity_level">
                            <Form.Label> Nível de intensidade </Form.Label>
                            <Form.Select>
                                <option> Qualquer um </option>
                                <option> Básico </option>
                                <option> Intermediário </option>
                                <option> Avançado </option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col className={styles["filter-system-cols"]}>
                        <Form.Group className="mb-3" controlId="only_females">
                            <Form.Label> Grupo feminino </Form.Label>
                            <Form.Check 
                                type="switch"
                                id="female_only_switch"
                            />
                        </Form.Group>
                    </Col>
                    <Col className={styles["filter-system-cols", "filter-system-btn"]}>
                        <Button type="submit">Aplicar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default FilterSystem;