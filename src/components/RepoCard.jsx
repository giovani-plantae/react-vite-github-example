import { Card, Col, Button } from 'react-bootstrap';

export default function RepoCard(repository) {
    const { id, name, description, html_url: htmlUrl, owner } = repository;

    return (
        <Col xs={12} className="mb-4">
            <Card>
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Title>{name}</Card.Title>
                        <span className="text-muted">Autor: {owner.login}</span>
                    </div>
                    <Card.Text>{description}</Card.Text>
                    <div className="d-flex flex-wrap justify-content-end">
                        <Button variant="primary" href={htmlUrl} target="_blank">
                            Ver Repositório
                        </Button>
                        <Button variant="secondary" href={`/details/${id}`} target="_blank" className="ms-2">
                            Ver detalhes
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}
