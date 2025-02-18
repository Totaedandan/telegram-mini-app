import { useEffect } from "react";
import { MemoryRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.expand(); // Разворачивает Mini App
  }, []);

  return (
    <MemoryRouter>
      <div className="app">
        {/* Верхняя панель */}
        <div className="top-bar">
          <div className="stat">
            ❤️ <span>5</span>
          </div>
          <div className="stat">
            🪙 <span>200</span>
          </div>
          <div className="stat">
            🔥 <span>0</span>
          </div>
        </div>

        {/* Заголовок курса */}
        <h2 className="course-title">Full-Stack Developer</h2>
        <div className="lesson">
          <p>Intro to Web Development</p>
          <button
            className="play-button"
            onClick={() =>
              window.open("https://www.youtube.com/watch?v=3JluqTojuME", "_blank")
            }
          >
            ▶
          </button>
        </div>

        {/* Навигация */}
        <nav className="bottom-nav">
          <Link to="/" className="nav-item">📖 Learn</Link>
          <Link to="/practice" className="nav-item">⚡ Practice</Link>
          <Link to="/payment" className="nav-item">💰 Payment</Link>
          <Link to="/leaderboard" className="nav-item">🏆 Leaderboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<div>Learn Page</div>} />
          <Route path="/practice" element={<div>Practice Page</div>} />
          <Route path="/payment" element={<div>Payment Page</div>} />
          <Route path="/leaderboard" element={<div>Leaderboard Page</div>} />
        </Routes>
      </div>
    </MemoryRouter>
  );
}

export default App;