import { Button, Spinner } from 'react-bootstrap';

export default function LoadMoreButton({loading, page, getRepositories}) {

    function handleClick() {
        getRepositories(page, 10);
    }

    return (
        <Button variant="primary" onClick={handleClick} disabled={loading}>
            {loading ? (
                <>
                    <Spinner animation="border" size="sm" role="status" className="me-2" />
                    Carregando...
                </>
            ) : (
                'Carregar Mais'
            )}
        </Button>
    );
}
