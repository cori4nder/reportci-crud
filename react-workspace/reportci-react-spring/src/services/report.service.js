import httpClient from '../http-common';

// Recebe a promessa do BD

const getAll = () => {
    return httpClient.get('/reports');
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll };
