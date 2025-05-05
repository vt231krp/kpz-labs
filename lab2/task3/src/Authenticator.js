"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticator = void 0;
class Authenticator {
    constructor() {
        this.users = new Map();
        this.currentUser = null;
        this.users.set("admin", "admin123");
        this.users.set("user1", "password123");
    }
    static getInstance() {
        if (!Authenticator.instance) {
            Authenticator.instance = new Authenticator();
        }
        return Authenticator.instance;
    }
    login(username, password) {
        if (this.users.has(username) && this.users.get(username) === password) {
            this.currentUser = username;
            console.log(`User ${username} logged in successfully`);
            return true;
        }
        console.log(`Failed login attempt for ${username}`);
        return false;
    }
    logout() {
        const user = this.currentUser;
        this.currentUser = null;
        console.log(`User ${user} logged out`);
    }
    isAuthenticated() {
        return this.currentUser !== null;
    }
    getCurrentUser() {
        return this.currentUser;
    }
    registerUser(username, password) {
        if (this.users.has(username)) {
            console.log(`Username ${username} already exists`);
            return false;
        }
        this.users.set(username, password);
        console.log(`User ${username} registered successfully`);
        return true;
    }
    getInstanceId() {
        return `Authenticator instance: ${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }
}
exports.Authenticator = Authenticator;
Authenticator.instance = null;
