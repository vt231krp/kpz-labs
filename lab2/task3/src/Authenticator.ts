export class Authenticator {
  private static instance: Authenticator | null = null;
  private users: Map<string, string> = new Map();
  private currentUser: string | null = null;

  private constructor() {
    this.users.set("admin", "admin123");
    this.users.set("user1", "password123");
  }

  static getInstance(): Authenticator {
    if (!Authenticator.instance) {
      Authenticator.instance = new Authenticator();
    }
    return Authenticator.instance;
  }

  login(username: string, password: string): boolean {
    if (this.users.has(username) && this.users.get(username) === password) {
      this.currentUser = username;
      console.log(`User ${username} logged in successfully`);
      return true;
    }
    console.log(`Failed login attempt for ${username}`);
    return false;
  }

  logout(): void {
    const user = this.currentUser;
    this.currentUser = null;
    console.log(`User ${user} logged out`);
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  getCurrentUser(): string | null {
    return this.currentUser;
  }

  registerUser(username: string, password: string): boolean {
    if (this.users.has(username)) {
      console.log(`Username ${username} already exists`);
      return false;
    }
    this.users.set(username, password);
    console.log(`User ${username} registered successfully`);
    return true;
  }

  getInstanceId(): string {
    return `Authenticator instance: ${Date.now()}-${Math.floor(
      Math.random() * 1000
    )}`;
  }
}
