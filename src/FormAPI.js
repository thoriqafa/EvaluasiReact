import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './components/Button'
import Template from './components/Template'

export default function FormAPI() {
  const [data, setdata] = useState([])
  const [edit, setedit] = useState(null)
  const getData = () => {
    console.log('get data')
    axios.get('http://localhost:3001/daftar')
      .then(hasil => {
        setdata(hasil.data)
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.daftar.value
    axios.post('http://localhost:3001/daftar', { name: value })
      .then(() => {
        console.log('post')
        getData()
      })

    e.target.daftar.value = ''
  }
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/daftar/${id}`).then(() => {
      console.log('delete')
      getData()
    })
  }

  const handleEdit = (e) => {
    e.preventDefault()
    console.log('index edit', edit, data[edit].id)
    axios.patch(`http://localhost:3001/daftar/${data[edit].id}`, { name: e.target.daftar.value })
      .then(() => {
        getData()
        setedit(null)
      })
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <Template>
      <form onSubmit={handleSubmit} className="p-5 grid grid-cols-2 gap-4 border rounded-lg drop-shadow-2xl bg-black">
        <input type="text" className="form-input" name="daftar" placeholder='Nama List' />
        <Button type="submit" text="Add New"/>
      </form>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 items-center'>
        {data.map((daftar, i) => {
          return <div key={i} className='drop-shadow-2xl bg-white border rounded-lg overflow-hidden p-4'>
            {edit === i ?
              <form className='w-full flex space-x-2' onSubmit={(event) => handleEdit(event)}>
                <input className="form-input w-2/3" name="daftar" defaultValue={daftar.name} />
                <button className='bg-blue-500 text-white py-2 px-2 rounded-full w-1/3'>Save</button>
              </form>
              : daftar.name
            }
            <div className='flex py-4 gap-4 text-center'>
              <div className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 w-1/2 rounded-full' onClick={() => setedit(i === edit ? null : i)}>edit</div>
              <div className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 w-1/2 rounded-full' onClick={() => handleDelete(daftar.id)}>delete</div>
            </div>
          </div>
        })}
      </div>
    </Template>
  )
} 
