import useGitHubRepository from "../hooks/useGitHubRepository.js";
import { Container, Row } from 'react-bootstrap';
import RepoCard from "./RepoCard.jsx";
import LoadMoreButton from "./LoadMoreButton.jsx";

export default function RepoList() {

    const { repos, loading, page, getRepositories } = useGitHubRepository();

    function handleClick() {
        getRepositories(page, 10);
    }

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
                        {repos.map(repository => (
                            <RepoCard key={repository.id} {...repository} />
                        ))}
                        <LoadMoreButton
                            loading
                            handleClick={handleClick}
                        />
                    </Row>
                </Container>
            </main>
        </>
    );
};
