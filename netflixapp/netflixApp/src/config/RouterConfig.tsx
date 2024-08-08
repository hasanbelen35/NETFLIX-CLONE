import SignInPage from '../homepage/components/header/SıgnInPage/SignInPage'
import {Routes,Route} from 'react-router-dom'
import HomeNav from '../homepage/components/header/HomeNav'
import SessionPage from '../SessionPage/SessionPage'
import SignUpPage from '../homepage/components/header/signUp/SignUpPage'
function RouterConfig() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<HomeNav />} />
    <Route path="/sessionPage" element={<SessionPage />} />

    <Route path='/signIn' element={<SignInPage />} />
    <Route path='/signUp' element={<SignUpPage />} />

    </Routes>
    </div>
  )
}

export default RouterConfig
