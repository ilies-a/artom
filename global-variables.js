export const PRODUCTION_URL = "https://artom.com";
const API_URL_FOR_PRODUCTION = "http://localhost:8000"
const API_URL_FOR_DEVELOPMENT = "http://localhost:8000"
export const API_URL = process.env.NODE_ENV === "production" ? API_URL_FOR_PRODUCTION:API_URL_FOR_DEVELOPMENT;