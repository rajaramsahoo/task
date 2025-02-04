import { useState, useEffect } from 'preact/hooks'

import axios from "axios"
export function App() {
  const [data, setData] = useState([])
  const [task, setTask] = useState({
    name: "",
    birth_year: "",
    height: "",
    gender: ""
  })
  const fetchData = async () => {
    try {
      const res = await axios.get('https://swapi.dev/api/people/?format=json')
      console.log(res.data.results)
      setData(res.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { fetchData() }, [])

  const addTask = async (e) => {
    e.preventDefault()
    try {

      axios.post(`https://swapi.dev/api/people/?format=json`, { task })

    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://swapi.dev/api/people/?format=json/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = async (id) => {

    try {
      const updateData = {}
      await axios.put(`https://swapi.dev/api/people/?format=json/${id}`, {
        updateData
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="">

      <form>
        <input placeholder='Name' type="text" value={task.name} onChange={(e) => setTask({ ...task, name: e.target.value })} />
        <input placeholder='Birth Year' type="text" value={task.birth_year} onChange={(e) => setTask({ ...task, birth_year: e.target.value })} />
        <input placeholder='Height' type="text" value={task.height} onChange={(e) => setTask({ ...task, height: e.target.value })} />
        <input placeholder='Gender' type="text" value={task.gender} onChange={(e) => setTask({ ...task, gender: e.target.value })} />
        <button onClick={addTask}>Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Height</th>
            <th>Gender</th>
            <th>Delete</th>
            <th>Edit</th>

          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.birth_year}</td>
              <td>{item.height}</td>
              <td>{item.gender}</td>
              <td onClick={() => handleEdit(item.id)}>Edit</td>
              <td onClick={() => handleDelete(item.id)}>Delete</td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}
