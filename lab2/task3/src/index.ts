import { Authenticator } from "./Authenticator";

console.log("\n1. Testing instance uniqueness:");
const auth1 = Authenticator.getInstance();
const auth2 = Authenticator.getInstance();

console.log("Instance 1 ID:", auth1.getInstanceId());
console.log("Instance 2 ID:", auth2.getInstanceId());

console.log("\nTrying to login with valid credentials:");
auth1.login("admin", "admin123");
console.log("Current user:", auth1.getCurrentUser());
console.log("Is authenticated:", auth1.isAuthenticated());

console.log("\nVerifying auth state in second reference:");
console.log("Current user (from auth2):", auth2.getCurrentUser());
console.log("Is authenticated (from auth2):", auth2.isAuthenticated());

console.log("\nLogging out:");
auth1.logout();
console.log("Is authenticated:", auth2.isAuthenticated());

console.log("\n3. Testing user registration:");
auth1.registerUser("newuser", "newpass123");
console.log("\nTrying to login with new user:");
auth2.login("newuser", "newpass123");
console.log("Current user:", auth1.getCurrentUser());

console.log("\nLogging out:");
auth2.logout();
