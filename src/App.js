import "./App.css";
import ContactList from "./components/ContactList";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import AddButton from "./components/AddContact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewContactForm from "./components/NewContactForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <PrimarySearchAppBar />
          </nav>
        </header>
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ContactList />
                  <AddButton />
                </>
              }
            />
            <Route path="/CreateNewContact" element={<NewContactForm />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
