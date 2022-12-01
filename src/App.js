import React from "react";
import Header from "./Components/Header";
import './index.css';
import FeedBackList from "./Components/FeedBackList";
import FeedBackStats from "./Components/FeedBackStats";
import FeedBackForm from "./Components/FeedBackForm";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from "./Components/AboutIconLink";
import Post from "./Components/Post";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes >
                        <Route exact path="/" element={
                            <>
                                <FeedBackForm />
                                <FeedBackStats />
                                <FeedBackList />
                                <AboutIconLink />
                            </>
                        }
                        />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/post/*" element={<Post />} />
                    </Routes>
                </div>

            </Router >
        </FeedbackProvider>
    )
}

export default App;