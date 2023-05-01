import PropTypes from 'prop-types'

const FirstApp = ({ title, subTitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: 'Your Name Here',
  subTitle: 'Your SubTitle Here!'
}

export { FirstApp }
