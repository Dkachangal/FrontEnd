import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FispName from './components/DispName'
import { RollNumber } from './components/RollNumber'
import ConditionalRendering from './components/ConditionalRendering'
import { AgeChecker } from './components/AgeChecker'
import PassObject from  './components/PassObject'
import RevisionComponent from './components/RevisionComponent'
import HomePageTrial from './pages/homeTrial'
import FormPage from './pages/FormPage'
import StudentDisplayer from './components/StudentDisplayer'


function App() {

  // return (
  //   <>
  //     <div>Hello World</div>
  //     <First />
  //     <DisplayName name = "Divyansh" />
  //     <FispName name = "dk" />
  //     <RollNumber num = {2401921520101} />
  //     <ConditionalRendering num = {12} />
  //     <AgeChecker age = {19} />
  //     <PassObject obj = {{age: 22, favColor: "blue", name: "DkBhai"}} />
  //     <RevisionComponent object = {{title: "Revision!", subtitle: "Revisoin subtitle", titleColor: "red", subTitleColor: "green"}} />
  //     <HomePageTrial />
  //   </>
  // )
  return (
    <>
      <FormPage />
      {/* <StudentDisplayer student = {{name: "Divyansh", age: 20, favColor: "blue", dob: "29/06/2006"}} /> */}
    </>

  )
}

// function First() {

//   const abcNumber = 3;
//   if (abcNumber === 1) {
//     return (
//       <h1 style = {{color: 'orange'}}>This is my first component - ABC number</h1>
//     )
//   } 
//   else if (abcNumber === 2){
//     return (
//       <h3 style = {{color : "blue"}}>This is my first component - ABC number</h3>
//     )
//   }
//   else if (abcNumber === 3) {
//     return (
//       <h1>New Page!!</h1>
//     )
//   }
// }

export default App
