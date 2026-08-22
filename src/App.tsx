import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';

// HashRouter (routes at /#/...) is used instead of BrowserRouter so the app
// works with the current Nginx config, which serves this as a static file
// with no SPA rewrite rule. Switch to BrowserRouter once that rule exists.
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
