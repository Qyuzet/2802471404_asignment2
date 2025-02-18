import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import ProfilePage from "./components/ProfilePage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [profileId, setProfileId] = useState(null);

  useEffect(() => {
    // Handle hash-based routing
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#/profile/")) {
        setCurrentPage("profile");
        setProfileId(Number(hash.split("/")[2]));
      } else {
        setCurrentPage("home");
        setProfileId(null);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        {currentPage === "home" ? <Homepage /> : <ProfilePage id={profileId} />}
      </main>
    </div>
  );
}

export default App;
