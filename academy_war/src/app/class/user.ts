export class User {
    private isPremium: boolean | undefined = false;
    private username: string = "";
    private id: string = "";

    constructor(id: string, username: string, isPremium?: boolean) {
        this.id = id;
        this.username = username;
        this.isPremium = isPremium;
    }

    getUsername() { return this.username; }
    getId() { return this.id; }
    isUserPremium() { return this.isPremium; }

    setId(id: string) { this.id = id }
    setUsername(username: string) { this.username = username }
    setIsPremium(isPremium: boolean) { this.isPremium = isPremium }
}