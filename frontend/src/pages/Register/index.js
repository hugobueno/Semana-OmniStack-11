import React, { useState } from 'react'
import './styles.css'
import logoImg from "../../assets/logo.svg"
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'



export default function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhats] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')
    const history = useHistory()

    async function handRegister(e) {
        e.preventDefault()
        const data = { name, email, whatsapp, city, uf }
        try {
            const response = await api.post('ongs', data)
            history.push('/')

        } catch (error) {
            alert(`Erro ao cadastrar ${error}`)

        }
    }

    return (
        <div className="container">
            <div className="row align-items-center person-from-register justify-content-center">
                <div className="col-sm-10">
                    <div className="card shadow-lg">
                        <div className="card-body p-5">
                            <div className="row">
                                <div className="col-sm p-5">
                                    <div className="row ">
                                        <img width="60%" src={logoImg} alt="be the Hero" />
                                    </div>
                                    <div className="row mt-5">
                                        <h3>Cadastro de ONG's</h3>
                                        <p className="mt-3">Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                                    </div>
                                    <div className="row mt-4">
                                        <Link to="/" className="font-weight-bold">
                                            <FiArrowLeft color="#e02041" /> Voltar ao Logon
                                        </Link>
                                    </div>

                                </div>


                                <div className="col-sm p-5">
                                    <form onSubmit={handRegister}>
                                        <input
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            placeholder="Nome da ONG" className="form-control"
                                            type="text"
                                        />
                                        <input
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            placeholder="Email"
                                            className="form-control mt-2"
                                            type="email"
                                        />
                                        <input
                                            value={whatsapp}
                                            onChange={e => setWhats(e.target.value)}
                                            placeholder="WhatsApp"
                                            className="form-control mt-2"
                                            type="number" />
                                        <div className="row">

                                            <input
                                                value={city}
                                                onChange={e => setCity(e.target.value)}
                                                style={{ width: 250 }}
                                                placeholder="Cidade"
                                                className="form-control mt-2 ml-3"
                                                type="text"
                                            />
                                            <input
                                                value={uf}
                                                onChange={e => setUf(e.target.value)}
                                                style={{ width: 70 }}
                                                placeholder="Uf"
                                                className="form-control mt-2 ml-2"
                                                type="text"
                                            />



                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-sm">
                                                <button type="submit" className="btn btn-person-register btn-block p-2">Cadastrar</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}