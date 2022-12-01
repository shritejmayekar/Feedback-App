import React,{useState,useEffect} from 'react'
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
function FeedBackForm() {
    const [text,setText] = useState('');
    const [rating,setRating] = useState(10);
    const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)

    const [btnDisabled,setBtnDisabled] = useState(true);
    const [message,setMessage] = useState('');

    useEffect(()=>{ 
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' &&  text.trim().length <= 10 ) {
            setBtnDisabled(true)
            setMessage("Text must be at least 10 characters")
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)

    }
    const handleSubmbit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10 ) {
            const newFeedback = {
                text:text,
                rating:rating
            }
            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id,newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            setText('')
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmbit}>
            <h2>How would you rate your service with us ?</h2>
            {/* { @todo  -rating select component} */}
            <RatingSelect select={(rating)=> setRating(rating)} />
            <div className='input-group'>
                <input onChange={handleTextChange} value={text} type='text' placeholder="Write a review" />
                <Button type='submit' isDisabled={btnDisabled} >Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedBackForm