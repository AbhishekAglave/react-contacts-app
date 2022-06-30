import "./App.css";
import ContactList from "./components/ContactList";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import AddButton from "./components/AddContact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewContactForm from "./components/NewContactForm";
import React, { useState } from "react";

function App() {
  const [contactList, setContactList] = useState(
    JSON.parse(localStorage.getItem("contactList")) || []
  );
  
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
                  <ContactList contactList={contactList} setContactList={setContactList}/>
                  <AddButton />
                </>
              }
            />
            <Route
              path="/CreateNewContact"
              element={
                <NewContactForm
                  contactList={contactList}
                  setContactList={setContactList}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
