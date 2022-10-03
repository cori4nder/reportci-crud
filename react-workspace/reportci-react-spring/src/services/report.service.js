import httpClient from '../http-common';

// Recebe a promessa do BD

const getAll = () => {
    return httpClient.get('/reports');
}

const create = (data) => {
    return httpClient.post('/reports', data);
}

const get = (id) => {
    return httpClient.get(`/reports/${id}`);
}

const update = (data) => {
    return httpClient.put('/reports', data);
}

const remove = (id) => {
    return httpClient.delete(`/reports/${id}`);
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, get, update, remove };
