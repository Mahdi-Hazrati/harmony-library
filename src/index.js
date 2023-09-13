import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SingleBook from "./Pages/SingleBook/SingleBook";
import BookDetails from "./Components/BookDetails/BookDetails";
import BookList from "./Components/BookList/BookList";
import "./Theme/Index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                  <Route path="/single" element={<SingleBook />} />
                  <Route path="/book" element={<BookList />} />
                  <Route path="/book/:id" element={<BookDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
