import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import auth from "../Firebase/firebase.config"

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("")
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Observing user", currentUser)
      setUser(currentUser)
      setLoading(false)
    })

    return () => {
      unSubscribe()
    }
  }, [])

  const authInfo = { user, createUser, login, logout, loading }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node,
}

export default AuthProvider
