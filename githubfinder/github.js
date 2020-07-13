class Github {
    constructor() {
        this.client_id = "7b26bfe7f0cd877a85c5";
        this.client_secret = "b201dec25dc5c9316920970697f8a3e21a4f5b5d";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        
        return {
            profile,
            repos
        }
    }
}