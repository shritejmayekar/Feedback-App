import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'Hello from context 1',
            rating: 10
        },
        {
            id: 2,
            text: 'Hello from context 2',
            rating: 8
        },
        {
            id: 3,
            text: 'Hello from context 3',
            rating: 9
        }
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit:false
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }

    // delete feedback
    const deleteFeedback = (id) => {
        console.log('App=>', id)
        if (window.confirm('Are you sure want to delete ?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // update feedback
    const updateFeedback = (id,upItem) => {
        setFeedback(feedback.map((item)=>(item.id === id ? { ...item,...upItem}:item )))
        setFeedbackEdit({item:{},edit:false})
    }

    // set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }
    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,

    }} >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
