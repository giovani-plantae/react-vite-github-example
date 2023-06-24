import { useEffect, useState } from 'react';

export default function useGitHubRepository() {

    const DEBOUNCE_DELAY = 300;

    const [repos, setRepos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    function debounce(func, delay) {
        let timerId;

        return function (...args) {
            clearTimeout(timerId);

            timerId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    }

    function getRepositories(page, perPage) {

        setLoading(true);

        const apiUrl = `https://api.github.com/users/github/repos?page=${page}&per_page=${perPage}`;
        const abortController = new AbortController();

        fetch(apiUrl, {signal: abortController.signal})
            .then(res => res.json())
            .then(res => {
                setRepos(prevRepos => [...prevRepos, ...res]);
                setPage(prevPage => prevPage + 1);
                setLoading(false);
            })
            .catch(console.error);

        return abortController;
    }

    useEffect(() => {

        const request = getRepositories(page, 10);

        return () => {
            request.abort();
        }

    }, []);

    useEffect(() => {

        function handleScroll() {

            const scrollPosition = window.innerHeight + window.pageYOffset;
            const documentHeight = document.documentElement.offsetHeight;
            const threshold = 300;

            if (scrollPosition >= documentHeight - threshold && !loading) {
                getRepositories(page, 10);
            }
        };

        const debouncedHandleScroll = debounce(handleScroll, DEBOUNCE_DELAY);

        window.addEventListener('scroll', debouncedHandleScroll);

        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll);
        };

    }, [loading]);

    return { repos, page, loading, getRepositories };
}