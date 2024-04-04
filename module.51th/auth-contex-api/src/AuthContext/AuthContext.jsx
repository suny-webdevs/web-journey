import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import auth from "../Firebase/firebase.config"

export const MainAuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const loginWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => {
      unSubscribe()
    }
  }, [])

  const userInfo = {
    user,
    loading,
    createUser,
    loginUser,
    loginWithGoogle,
    logOut,
  }

  console.log(user)

  return (
    <div>
      <MainAuthContext.Provider value={userInfo}>
        {children}
      </MainAuthContext.Provider>
    </div>
  )
}

AuthContext.propTypes = {
  children: PropTypes.node,
}

export default AuthContext
