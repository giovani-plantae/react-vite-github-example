import { Button, Spinner } from 'react-bootstrap';

export default function LoadMoreButton({loading, handleClick}) {

    return (
        <Button variant="primary" onClick={handleClick} disabled={loading}>
            {(loading ? getButtonEnabled : getButtonDisabled)()}
        </Button>
    )
}

function getButtonEnabled(){
    return (
        <>
            Carregar Mais
        </>
    );
}

function getButtonDisabled(){
    return (
        <>
            <Spinner animation="border" size="sm" role="status" className="me-2" />
            Carregando...
        </>
    );
}