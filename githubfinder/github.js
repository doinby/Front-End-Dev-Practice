class Github {
    constructor() {
        this.client_id = "7b26bfe7f0cd877a85c5";
        this.client_secret = "b201dec25dc5c9316920970697f8a3e21a4f5b5d";
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        return {
          profile
        }
    }
}