import React, { useState } from "react";
import Header from "./Components/Header";
import './index.css';
import FeedBackData from "./data/FeedBackData";
import FeedBackList from "./Components/FeedBackList";
import FeedBackStats from "./Components/FeedBackStats";
import FeedBackForm from "./Components/FeedBackForm";
import { v4 as uuidv4 } from 'uuid';
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from "./Components/AboutIconLink";
import Post from "./Components/Post";
function App() {
    const [feedback, setFeedback] = useState(FeedBackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        console.log('App=>', id)
        if (window.confirm('Are you sure want to delete ?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes >
                    <Route exact path="/" element = {
                        <>
                        <FeedBackForm handleAdd={addFeedback} />
                        <FeedBackStats feedback={feedback} />
                        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
                        <AboutIconLink />
                        </>
                    }
                    
                    />
                        
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/post/*" element={<Post />} />

                </Routes>
            </div>

        </Router >
    )
}

export default App;