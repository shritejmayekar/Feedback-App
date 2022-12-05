import PropTypes from 'prop-types'

function Header({text,bgColor,textColor}) {
  const headerStyle = {
    backgroundColor:bgColor,
    color:textColor
  }


  return (
    <header style={headerStyle}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text:'FeedBack UI',
    bgColor:'#000000e6',
    textColor:'#ff6a95'
}
Header.propTypes = {
    text:PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string
}

export default Header
