import React from 'react'
import "./tech.css"

const Teacher = () => {
    return (
        <div className='Tech'>
            <div className="surov">
                <form action="#">
                    <label htmlFor="name">Ism</label>
                    <input type="name" id='name' placeholder='Ism' />
                    <label htmlFor="surname">Familiya</label>
                    <input type="text" id='surname' placeholder='Familiya' /><br /><br />
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder='Email' />
                    <label htmlFor="class">Sinf nomi</label>
                    <input type="text" id='class' placeholder='Sinf nomi' /><br /><br />
                    <button type='submit'>Saqalash</button>
                </form>

            </div>
        </div>
    )
}

export default Teacher