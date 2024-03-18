import React from 'react';
import { Link } from 'react-router-dom';
import "./ErrorPage.css"
function ErrorPage() {
    return (
        <div class="error-card">
            <h2>Oops! Página não encontrada</h2>
            <p>Parece que a página que você procura não existe.</p>
            <a href="/">Voltar para a página inicial</a>
        </div>
    );
}

export default ErrorPage;
