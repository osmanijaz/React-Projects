import React, { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
  import { ToastContainer, toast } from 'react-toastify'

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10))
// console.log(new Values('#f15025').all(10))


  // toast.error('error')
  // toast.success('success')


  const addColor = (color) => {
    console.log(color)
    try{
      const newColors = new Values(color).all(10)
      setColors(newColors)

    }
    catch (error){
      console.log(error.message)
      toast.error(error.message)

    }


  }

  return (
    <main>
      <Form addColor={addColor} />

      <ColorList colors={colors} />
      <ToastContainer position="top-center" style={{ width: '60vw' }} />
    </main>
  )
};
export default App;
