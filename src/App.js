import './App.css';
import { useState, useMemo, useCallback } from 'react';


function App() {

  const [student, setStudent] = useState({ fname: "", lname: "", password: "", email: "" })

  const [data, setData] = useState(JSON.parse(localStorage.getItem("d")) || [])


  const fontSubmit = (e) => {
    console.log(e.target.name)
    setStudent({ ...student, [e.target.name]: e.target.value })
  }

  const submit = () => {
    setData([...data, student])
    localStorage.setItem("d", JSON.stringify([...data, student]))

  }
  console.log(data);

  const getBackgroundColor = useMemo(() => {
    if (student.fname === "parth") {
      return "red"
    }
    else if (student.fname === "disha") {
      return "Aquamarine"
    }
    else if (student.fname === "tanvi") {
      return "green"
    }
    return "Bisque"

  }, [student.fname])


  const getBackgroundColorCallback = useCallback((idx, lname) => {
    if (idx === 1) {
      return "red"
    }
    else if (idx === 2) {
      return "Aquamarine"
    }
    else if (idx === 3) {
      return "green"
    }
    else if (idx === 4) {
      return "pink"
    }
    else if (lname === "disha") {
      return <h1>Hello disha</h1>
    }
    return "Bisque"

  }, [])


  const changevalue = useCallback((value) => {

    return <h1>Hello {value}</h1>

  }, [])



  return (
    <>
      <div className=' '>
        <div className="flex flex-col gap-[20px] " >
          <div style={{ backgroundColor: getBackgroundColor, display:"flex", flexDirection:"column",alignItems:"center",gap:"20px",padding:"20px" }} >

            <div  >
              <label htmlFor="fname" ><b className="text-xl">Fname:</b></label>
              <input type="text" id="fname" name="fname" value={student.fname} onChange={(e) => { fontSubmit(e); changevalue(e.target.value) }} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent" />
            </div>

            <div >
              <label htmlFor="lname"><b className="text-xl">Lname:</b></label>
              <input type="lname" id="lname" name="lname" value={student.lname} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent" />
            </div>

            <div>
              <label htmlFor="password"><b className="text-xl">Password:</b></label>
              <input type="password" id="password" name="password" value={student.password} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent" />
            </div>

            <div>
              <label htmlFor="email"><b className="text-xl ">Email:</b></label>
              <input type="email" id="email" name="email" value={student.email} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-yellow-500  ml-2 h-12 w-44  bg-transparent " />
            </div>

            <div>
              <button className="bg-amber-600 h-12 w-24 rounded-xl  border-yellow-500  ml-[70px] mt-6" onClick={submit}><b>Submit</b></button>
            </div>
          </div>
        </div>
      </div>
      {getBackgroundColorCallback("", student.lname)}

      {changevalue(student.fname)}
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <table>
        <thead>
          <th>Fname</th>
          <th>Lname</th>
          <th>Password</th>
          <th>Email</th>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr style={{ backgroundColor: getBackgroundColorCallback(index) }}>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.password}</td>
                <td>{item.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default App;
