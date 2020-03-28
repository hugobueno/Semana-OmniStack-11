import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import "./styles.css"
import heroImg from "../../assets/heroes.png"
import logoImg from "../../assets/logo.svg"
import api from '../../services/api'

export default function Logon() {
    const [id, setId] = useState('')
    const history =  useHistory()

    async function Login(e) {
        e.preventDefault()
        try {
            const response = await api.post('sessions', { id })
            
            localStorage.setItem('ongid', response.data.idong)
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile')
        } catch (error) {

            alert("Erro id invalido")

        }
    }



    return (
        <div className="container">

            <div className="row align-items-center p-5 ">
                <div className="col-sm-6 person-from ">
                    <div className="row pb-5 justify-content-center">
                        <img src={logoImg} alt="be the Hero" />
                    </div>
                    <div className="row justify-content-center ">
                        <div className="col-sm-7">
                            <h5 className="font-weight-bold">Faça seu Logon</h5>
                            <form onSubmit={Login}>
                                <input
                                    value={id}
                                    onChange={e => setId(e.target.value)}
                                    type="text"
                                    className=" form-control mt-4"
                                    placeholder=" Sua Id "
                                />
                                <button className="btn btn-person-logon  btn-block mt-2" type="submit">Entrar</button>
                            </form>
                            <div className="row mt-3">
                                <Link to="/register" className="font-weight-bold">
                                    <FiLogIn color="#e02041" /> Não tenho cadastro
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 person-img-logon">
                    <img src={heroImg} alt="Heroes" />

                </div>
            </div>




        </div>

    )
}