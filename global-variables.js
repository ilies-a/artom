export const PRODUCTION_URL = "https://artom.com";
export const API_URL = process.env.NODE_ENV === "production" ? PRODUCTION_URL:"http://localhost:3000";