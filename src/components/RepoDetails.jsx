import { Card, Container, ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function RepoDetails() {
    const { id } = useParams();
    const [repository, setRepository] = useState(null);

    useEffect(() => {
        async function getRepositoryDetails() {
            try {
                const response = await fetch(`https://api.github.com/repositories/${id}`);
                const data = await response.json();
                setRepository(data);
            } catch (error) {
                console.error('Erro ao buscar detalhes do repositório:', error);
            }
        }

        getRepositoryDetails();
    }, [id]);

    return (
        <>
            <header className="bg-dark text-white py-4 mb-3">
                <Container>
                    <h1>Repositório do GitHub</h1>
                </Container>
            </header>
            <main>
                <Container>
                    {(repository ? drawCard : drawLoading)(repository)}
                </Container>
            </main>
        </>
    );
}

function drawLoading(repository) {
    return (
        <>
            Carregando...
        </>
    );
}

function drawCard(repository) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{repository.name}</Card.Title>
                <Card.Text>{repository.description}</Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <strong>Owner:</strong> {repository.owner.login}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Stars:</strong> {repository.stargazers_count}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Forks:</strong> {repository.forks_count}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Language:</strong> {repository.language}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>URL:</strong> <a href={repository.html_url} target="_blank">{repository.html_url}</a>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}