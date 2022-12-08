export const PRODUCTION_URL = "https://artom.io";
const API_DEVELOPMENT_URL = "http://localhost:8000";
const API_PRODUCTION_URL = "https://artom-api.onrender.com";
export const API_URL = process.env.NODE_ENV === "production" ? API_PRODUCTION_URL:API_DEVELOPMENT_URL;