import axios from "axios";

// Estabelece a conexão com o banco de dados
export default axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
        'Content-Type': 'application/json'
    }
});

