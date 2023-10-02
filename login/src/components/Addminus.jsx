import React, {useState} from 'react'

const Addminus = () => {
  let [counter, setCounter]= useState (0)

  const addvalue = () => {
    
    //counter=counter+1
   // setCounter(counter)
    //setCounter(prevCounter => prevCounter + 1)
    setCounter(counter + 1)  
  
    }
const minusValue = () => {
  
    //counter=counter-1
    //setCounter(counter)
    //setCounter(prevCounter => prevCounter - 1)
    setCounter(counter - 1)
  

}
return(
 <>
 
 <h1 className="text-3xl font-bold underlin " >The Add Minus function</h1>

 <br />

 <h2 className="text-3xl font-bold underline " >CounterValue: {counter}</h2>

 <br />
 <br /><br />

 <button
 onClick={addvalue}
 className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
 >AddValue {counter}</button>

<br />
<br />
 
 <button
 onClick={minusValue}
 className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          style={{backgroundColor: "red"}}>
minusValue {counter} </button>
 </>

)
}
export default Addminus