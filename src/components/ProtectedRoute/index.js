import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie' // Fix typo in import

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token') // Use Cookies with 's'
  if (token === undefined) {
    // Changed from '=== undefind' typo
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}
export default ProtectedRoute
