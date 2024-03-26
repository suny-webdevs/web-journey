import PropTypes from "prop-types"

const ReuseableForm = ({ handleSubmit, btnText = "Submit", children }) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault()

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }

    handleSubmit(data)
  }

  return (
    <div>
      {children}
      <form
        className="flex flex-col gap-5"
        onSubmit={handleLocalSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit">{btnText}</button>
      </form>
    </div>
  )
}

ReuseableForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  btnText: PropTypes.string,
  children: PropTypes.element,
}

export default ReuseableForm
