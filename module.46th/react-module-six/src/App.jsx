import "./App.css"
import Grandpa from "./components/Grandpa/Grandpa"
// import ReuseableForm from "./components/ReuseableForm/ReuseableForm"
// import Form from "./components/Form/Form"
// import FormHooked from "./components/FormHooked/FormHooked"

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log("Sign up data", data)
  // }

  // const handleUpdate = (data) => {
  //   console.log("Update data", data)
  // }

  return (
    <>
      <h1 className="text-3xl text-center font-bold my-10">Module 46</h1>
      <div className="flex flex-col justify-center items-center gap-10 border-2 border-orange-600 p-5">
        {/* <Form /> */}
        {/* <FormHooked /> */}
        {/* <ReuseableForm
          handleSubmit={handleSignUpSubmit}
          btnText="Sign Up"
        >
          <div>
            <h2 className="text-2xl text-center">Sign Up</h2>
            <p className="text-center">Please Sign Up right now</p>
          </div>
        </ReuseableForm>
        <ReuseableForm
          handleSubmit={handleUpdate}
          btnText="Update"
        >
          <div>
            <h2 className="text-2xl text-center">Update</h2>
            <p className="text-center">Update your Information</p>
          </div>
        </ReuseableForm> */}
        <Grandpa />
      </div>
    </>
  )
}

export default App
