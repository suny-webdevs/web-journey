import useInputState from "../../hooks/useInputState"

const FormHooked = () => {
  //   const [name, handleChange] = useInputState("")
  const nameState = useInputState("")
  const emailState = useInputState("")
  const passwordState = useInputState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("form hooked", nameState.value)
    console.log("form hooked", emailState.value)
    console.log("form hooked", passwordState.value)
  }
  return (
    <div>
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <input
          {...nameState}
          type="text"
          name="name"
          placeholder="Enter name"
          required
        />
        <input
          {...emailState}
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
        <input
          {...passwordState}
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormHooked
