import React from 'react'
import FeedBackItem from './FeedBackItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'
function FeedBackList() {
  const { feedback,isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>
  }
  return isLoading ? <Spinner />:(
    <div className='feedback-list'>
      <AnimatePresence >
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* <div className='feedback-list'>
        {feedback.map((item) => (
          <FeedBackItem key={item.id} item={item} />
        ))}
      </div> */}
      
    </div>
  )

}



export default FeedBackList