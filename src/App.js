import "./App.css";
import ContactList from "./components/ContactList";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import AddButton from "./components/AddContact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewContactForm from "./components/NewContactForm";
import React, {useState} from "react";

function App() {
  const [contactlist, setContactList] = useState([
    {
      name: "Abhishek Aglave",
      phone: 8530080493,
      email: "abhishekaglave85@gmail.com",
    },
    {
      name: "Rushikesh Aglave",
      phone: 8530090957,
      email: "rushi@gmail.com",
    },
    {
      name: "Priya Aglave",
      phone: 9834489946,
      email: "priya@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
  ]);

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
                  <ContactList contactlist={contactlist} />
                  <AddButton />
                </>
              }
            />
            <Route
              path="/CreateNewContact"
              element={
                <NewContactForm
                  contactlist={contactlist}
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
