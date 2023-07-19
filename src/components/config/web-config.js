const mode = "DEV";

export const BASE_URL =
  mode === "PROD"
    ? "https://api.grandealz.com"
    : "https://api.grandealz.vytech.co";

export const BASE_URL_UPLOAD =
  mode === "PROD"
    ? "https://api.grandealz.com/uploads"
    : "https://api.grandealz.com/uploads";
