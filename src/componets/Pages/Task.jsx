
import { useRef ,useState} from 'react'


export default function () {

  const [task,setTask]=useState(['task1','task2'])
  const inputRef=useRef()

  const add=()=>{
  const orginalinput=[...task]
  let textinput=inputRef.current.value;
  orginalinput.push(textinput)
  setTask( orginalinput)
  inputRef.current.value=""
    
  }

 const delTask=(index)=>{
    const orginalinput=[...task]
    orginalinput.splice(index , 1)
    setTask( orginalinput)
  // inputRef.current.value=""
    
  }


  return (
    <div className='d-flex  justify-content-center align-content-center'>
      <div className="card p-3 gap-3 shadow col-12 col-sm-6 col-md-3">

        <h1 className='text-center'>To Do List</h1>
      {task.map((el,index)=>{
        return( 
        <div className="d-flex gap-3 justify-content-center"> <h4 key={index}  className='text-center'> {el}</h4> <button className='btn btn-danger'onClick={()=>{delTask(index)}}>del</button></div>)
       
      })}
       

      <input ref={inputRef} className='form-control' />
      <button className='btn btn-primary' onClick={add}>AddTask</button>
  </div>

    </div>
  )
}
