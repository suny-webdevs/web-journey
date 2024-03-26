import { useEffect, useRef, useState } from "react"

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const nameRef = useRef("")

  useEffect(() => {
    nameRef.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      name: name,
      email: email,
      password: password,
    }

    if (password.length < 8) {
      setError("Password should be minimum 8 characters and longer")
    } else {
      setError("")
      console.log(user)
    }
  }

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div>
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <input
          ref={nameRef}
          onChange={handleName}
          type="text"
          name="name"
          placeholder="Enter name"
          required
        />
        <input
          onChange={handleEmail}
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
        <input
          onChange={handlePassword}
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
        {error && <p className="text-red-600 font-normal">{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
