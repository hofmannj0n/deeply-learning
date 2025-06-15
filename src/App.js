import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Deeply Learning</h1>
        <p className="subtitle">Expert Tutoring in Statistics & Calculus</p>
      </header>
      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>
            Hi! I'm an AI Engineer based in San Diego with 6 years of experience tutoring statistics and calculus. I graduated from SDSU in 2021 and specialize in helping high school and college students excel in math and data subjects.
          </p>
        </section>
        <section className="services">
          <h2>Subjects I Tutor</h2>
          <ul>
            <li>Precalculus</li>
            <li>Calculus (all levels, including AP Calculus)</li>
            <li>Business Statistics</li>
            <li>College Statistics</li>
            <li>General Math Support</li>
          </ul>
        </section>
        <section className="details">
          <h2>How It Works</h2>
          <ul>
            <li>Virtual sessions (Zoom, Google Meet, etc.)</li>
            <li>Flexible scheduling</li>
            <li>Personalized lesson plans</li>
            <li>Support for homework, test prep, and concept mastery</li>
          </ul>
        </section>
        <section className="contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
          <p>Based in San Diego, CA &mdash; available for students everywhere!</p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Deeply Learning. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
