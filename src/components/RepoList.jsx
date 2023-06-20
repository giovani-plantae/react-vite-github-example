import useGitHubRepository from "../hooks/useGitHubRepository.js";
import { Container, Row } from 'react-bootstrap';
import RepoCard from "./RepoCard.jsx";
import LoadMoreButton from "./LoadMoreButton.jsx";

export default function RepoList() {

    const { repos, loading, page, getRepositories } = useGitHubRepository();

    return (
        <>
            <header className="bg-dark text-white py-4 mb-3">
                <Container>
                    <h1>Lista de Repositórios do GitHub</h1>
                </Container>
            </header>
            <main>
                <Container>
                    <Row>
                        {repos.map(repo => (
                            <RepoCard key={repo.id} {...repo} />
                        ))}
                        <LoadMoreButton {...{loading, page, getRepositories}} />
                    </Row>
                </Container>
            </main>
        </>
    );
};
