export const PRODUCTION_URL = "https://artom.com";
console.log("process.env.NODE_ENV",process.env.NODE_ENV)
export const API_URL = process.env.NODE_ENV === "production" ? PRODUCTION_URL:"http://localhost:3000";