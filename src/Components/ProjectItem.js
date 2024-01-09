import { Row, Col } from "react-bootstrap";
import "../styles/ProjectItem.css"

const ProjectItem = (props) => {
    return (
        <>
            <Col md={6}>
                <Row className="client-card">
                    <Col md={9}>
                        <h4> {props.title} </h4>
                        <p> {props.description} </p>
                        <div>
                            <div className="live-button">
                                <a href={props.link} target="_blank" rel="noreferrer" > View live </a>
                            </div>
                            {props.github && <div className="github-button"> <a href={props.link} target="_blank" rel="noreferrer"> Github </a> </div>}
                        </div>
                    </Col>
                    <Col md={3} className="client-img-container">
                        <img className="client-img" src={props.image} alt="Client Logo" />
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default ProjectItem;
