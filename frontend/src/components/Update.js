
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"


const Update = () => {

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [manager, setManager] = useState('')
    const [img, setImg] = useState('')

    const params = useParams();
    console.log(params);
    const navigate = useNavigate();

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch(`http://localhost:8000/product/${params.id}`, {
            headers: {
                authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
              }
        })
        result = await result.json()
        console.log(result);
        setName(result.name)
        setDesc(result.desc)
        setManager(result.manager)
        setImg(result.img)
    }

    const onUpdate = async () => {
        console.log(name, desc, manager, img);
        let result = await fetch(`http://localhost:8000/product/${params.id}`, {
            method: "put",
            body: JSON.stringify({ name, desc, manager, img }),
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })
        result = await result.json()
        console.log(result);
        navigate('/')
    }

    return (
        <div className='addproducts' >
            <form>
                <h5> update Property Details</h5>
                <input text='text' placeholder='House Name' value={name} onChange={(e) => { setName(e.target.value) }} />
                <input text='text' placeholder=' house description' value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                <input text='text' placeholder=' Manger Name' value={manager} onChange={(e) => { setManager(e.target.value) }} />
                <input text='text' placeholder=' paste image address' value={img} onChange={(e) => { setImg(e.target.value) }} />
                <button type='button' onClick={onUpdate}  > update </button>
            </form>
        </div>
    )
}

export default Update
