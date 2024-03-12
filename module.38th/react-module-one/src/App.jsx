/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Student from './Student'
import Device from './Device'
import Todo from './Todo'
import BookStore from './BookStore'

function App() {

  const books = [
    {id: 1, name: 'Math', price: 100},
    {id: 2, name: 'Physics', price: 150},
    {id: 3, name: 'Chemistry', price: 120},
    {id: 4, name: 'Biology', price: 130},
    {id: 5, name: 'Economics', price: 200}
  ]

  return (
    <>
      <h1>React Module One</h1>

      <BookStore books={books} />

      <Student name="Ratul" grade="11" roll="10" />
      <Student name="Rajan" grade="12" roll="101" />
      <Student name="Saju" grade="13" roll="104" />

      <Device
        type="Smartphone"
        name="Redmi Note 12"
        price="20k"
        currency="BDT"
        brand="Xiaomi"
      />
      <Device 
        type="Smartphone" 
        name="Galaxy S23 Plus" 
        price="80k" 
        currency="BDT" 
        brand="Samsung"
      />
      <Device 
        type="Smartphone" 
        name="IPhone 13 Pro Max" 
        price="120k" 
        currency="BDT" 
        brand="Apple"
      />
      <Device 
        type="Smartphone" 
        name="IQOO Neo 9" 
        price="50k" 
        currency="BDT" 
        brand="Vivo"
      />

      <Todo task="Learn HTML" isDone={true}/>
      <Todo task="Learn CSS" isDone={true}/>
      <Todo task="Learn JavaScript" isDone={true}/>
      <Todo task="Learn React" isDone={false}/>
      <Todo task="Learn JSX" isDone={false}/>
    </>
  )
}

export default App
