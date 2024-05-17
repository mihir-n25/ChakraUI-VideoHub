import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import Footer from "./components/Footer.jsx"
import Video from "./components/Video.jsx"
import Upload from "./components/Upload.jsx"
import LogIn from "./components/LogIn.jsx"
import SignUp from "./components/SignUp.jsx"

function App() {
  const basename = process.env.PUBLIC_URL;

  return (
    <Router basename={basename}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/uploads" element={<Upload />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
