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
                            <a  href={props.link} target="_blank" rel="noreferrer" className="live-button">
                                <span> <i class="fa-solid fa-eye"></i> View </span>
                            </a>
                            {props.github && <a  href={props.github} target="_blank" rel="noreferrer" className="github-button"> <span> <i class="fa-brands fa-github"></i> Github </span> </a>}
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
