export const environment = process.env.AUTOMATION_ENV || process.env.NODE_ENV;
export const isProduction = environment === "production";
export const isTest = environment === "test";
export const isDevelopment = environment === "development";
export const API = process.env.API || "http://localhost:5000/api";
