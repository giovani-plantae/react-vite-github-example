import { Card, Col } from 'react-bootstrap';

export default function RepoCard(repository) {

    const { name, description, html_url: htmlUrl } = repository;

    return (
        <Col xs={12} className="mb-4">
            <Card>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Link href={htmlUrl}>Ver Repositório</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
}