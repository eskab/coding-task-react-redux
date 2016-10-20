import { connect } from 'react-redux'

import { loginUser } from '../actions/login'
import LoginBox from '../components/LoginBox'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handler: (...credentials) => dispatch(loginUser(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginBox)