import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import "./styles.css";
import App from './App.tsx'
import Dashboard from './pages/App/Dashboard.tsx';
import Decks from './pages/App/Decks.tsx'
import Comprehension from './pages/App/Comprehension.tsx';
import Conversations from './pages/App/Conversations.tsx'
import Writing from './pages/App/Writing.tsx'
import Wordlist from './pages/App/Wordlist.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path='decks' element={<Decks />} />
          <Route path='comprehension' element={<Comprehension />} />
          <Route path='conversation' element={<Conversations />} />
          <Route path='writing' element={<Writing />} />
          <Route path='wordlist' element={<Wordlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
