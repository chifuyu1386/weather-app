# 🌤️ Weather App

A modern and responsive weather application built with React that allows users to search for a city and view real-time weather information using the OpenWeather API.

## 🚀 Live Demo

👉 [View Live Demo](https://chifuyu1386.github.io/weather-app/)

---

## ✨ Features

- 🔎 Search weather by city name
- 🌡️ Display current temperature
- 🌡️ Display "feels like" temperature
- 💧 Display humidity
- 💨 Display wind speed
- 🌤️ Dynamic weather icons
- ⏳ Loading state while fetching data
- ⚠️ Error handling for invalid cities and API errors
- 📱 Responsive design for desktop and mobile
- 🎨 Modern dark UI with glassmorphism styling
- ⚡ Fast development and production build with Vite

---

## 🛠️ Tech Stack

### Frontend

- React
- JavaScript
- HTML5
- CSS3

### Tools

- Vite
- Git
- GitHub
- GitHub Actions
- GitHub Pages

### API

- OpenWeather API

---

## 📂 Project Structure

```text
weather-app/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   │   └── WeatherDetails.jsx
│   │
│   ├── services/
│   │   └── weatherApi.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md