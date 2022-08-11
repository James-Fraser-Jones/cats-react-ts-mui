import { Routes, Route, Link as RouterLink } from "react-router-dom";

import { Link, Button, CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link component={RouterLink} to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Button component={RouterLink} to="/" variant="contained">Home</Button>
      </nav>
    </>
  );
}

export default App;
