const GITHUB_API_URL = 'https://api.github.com/users/VeyselTandogru/repos';

document.addEventListener('DOMContentLoaded', () => {
    fetchRepos();
});

async function fetchRepos() {
    try {
        const response = await fetch(GITHUB_API_URL);
        const repos = await response.json();
        
        const reposContainer = document.getElementById('repos-container');
        reposContainer.innerHTML = '';
        
        repos.forEach(repo => {
            const repoCard = createRepoCard(repo);
            reposContainer.appendChild(repoCard);
        });
    } catch (error) {
        console.error('Error fetching repositories:', error);
        const reposContainer = document.getElementById('repos-container');
        reposContainer.innerHTML = '<p>Üzgünüm, projeler yüklenirken bir hata oluştu.</p>';
    }
}

function createRepoCard(repo) {
    const card = document.createElement('div');
    card.className = 'repo-card';
    
    card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || 'Açıklama yok'}</p>
        <p><strong>Languages:</strong> ${repo.language || 'Not specified'}</p>
        <a href="${repo.html_url}" target="_blank" class="repo-link">GitHub'da Görüntüle</a>
    `;
    
    return card;
}
