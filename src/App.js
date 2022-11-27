import React,{useState} from "react";
import Header from "./Components/Header";
import './index.css';
import FeedBackData from "./data/FeedBackData";
import FeedBackList from "./Components/FeedBackList";
import FeedBackStats from "./Components/FeedBackStats";
function App() {
    const [feedback, setFeedback] = useState(FeedBackData)

    const deleteFeedback = (id) => {
        console.log('App=>',id)
        if(window.confirm('Are you sure want to delete ?')) {
            setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }
    return (
        <>
        <Header/>
        <div className="container">
            <FeedBackStats feedback={feedback} />
          <FeedBackList feedback={feedback} handleDelete={deleteFeedback}/>

        </div>
        </>
    )
}

export default App;