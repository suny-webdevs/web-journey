/* eslint-disable react/prop-types */
import './App.css'

export default function Student({ name, grade, roll }) {
    return (
      <div className="student">
        <p>Name: {name}</p>
        <p>Class: {grade}</p>
        <p>Roll: {roll}</p>
      </div>
    )
}