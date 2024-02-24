import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const AddProduct = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [manager, setManager] = useState('')
    const [img, setImg] = useState('')

    const navigate = useNavigate();

    const [error, setError] = useState(false)

    const onClick = async () => {
        // console.log(name, desc, manager);
        if (!name || !desc || !manager || !img) {
            setError(true)
            return false;
        }

        let result = await fetch("http://localhost:8000/addproduct", {
            method: "post",
            body: JSON.stringify({ name, desc, manager,img}),
            headers: {
                "Content-Type": "application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })

        result = await result.json();
        console.log(result);
        navigate('/')
    }

    return (
        <div className='addproducts' >
            <form>
                <h5> Enter Property Details</h5>

                <input text='text' placeholder='House Name' value={name} onChange={(e) => { setName(e.target.value) }} />
                {error && !name && <span className="invalid-input" >Enter Valid Name</span>}

                <input text='text' placeholder=' house description' value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                {error && !desc && <span className="invalid-input" >Enter Valid desc</span>}

                <input text='text' placeholder=' Manger Name' value={manager} onChange={(e) => { setManager(e.target.value) }} />
                {error && !manager && <span className="invalid-input" >Enter Valid manager name</span>}

                <input text='text' placeholder=' paste image address' value={img} onChange={(e) => { setImg(e.target.value) }} />
                {error && !img && <span className="invalid-input" >Enter Valid image address</span>}

                <button type='button' onClick={onClick}  > submit </button>

            </form>
        </div>
    )
}

export default AddProduct
