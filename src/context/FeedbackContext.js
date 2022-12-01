import { createContext, useEffect, useState } from 'react'
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit:false
    })
    useEffect(()=>{
        fetchFeedback()
    },[])

    // fetch feedback 

    const fetchFeedback = async () => {
        const response = await fetch(`feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch(`feedback`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newFeedback)
        })
        const data = await response.json()
       
        setFeedback([data, ...feedback])
    }

    // delete feedback
    const deleteFeedback = async(id) => {
        console.log('App=>', id)
        if (window.confirm('Are you sure want to delete ?')) {
            await fetch(`feedback/${id}`,{method:'DELETE'})
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // update feedback
    const updateFeedback = async(id,upItem) => {
        const response = await fetch(`feedback/${id}`,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(upItem)
        })
        const data = await response.json()
        setFeedback(feedback.map((item)=>(item.id === id ? { ...item,...data}:item )))
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
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,

    }} >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
