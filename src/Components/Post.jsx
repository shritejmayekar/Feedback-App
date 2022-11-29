import React from 'react'
import {useParams,Navigate,useNavigate, Route,Routes} from 'react-router-dom'
function Post() {
    const parms = useParams()
    const navigate = useNavigate()
    const status = 200
    if(status === 404 ) {
        return <Navigate to="/notfound" />
    }
    const onClick = () => {
        console.log("Hello")
        navigate('/about')
    }
    const onShow = () => {
        console.log("Hello")
        navigate('/post/show')
    }
  return (
    <div>
        <h1>Post {parms.id}</h1>
        <p>Name {parms.name}</p>
        <button onClick={onClick} className={`btn btn-secondary`}>About</button>
        <br/>
        <br/>
        <button onClick={onShow} className={`btn btn-secondary`}>Show</button>
        <Routes>
            <Route path='/show' element={<h1>Hello World</h1>} />
        </Routes>
    </div>
  )
}

export default Post