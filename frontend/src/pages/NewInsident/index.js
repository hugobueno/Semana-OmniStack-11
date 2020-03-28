import React, { useState, useEffect } from 'react'
import './styles.css'
import logoImg from "../../assets/logo.svg"
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'



export default function NewInsident() {
    const history = useHistory()
    const idong = localStorage.getItem('ongid')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    async function criarInsident(e) {
        e.preventDefault()
        const data = { title, description, value, idong }
        try {
            const response = await api.post('insidents', data, {
                headers: {
                    Autorization: idong
                }
            })
            history.push('/profile')

        } catch (error) {
            alert("erro ao cadastrar CASO, tente mais tarde")

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
                                        <h3>Cadastrar Novo Caso</h3>
                                        <p className="mt-3">Descreva o caso detalhadamento para encontrar um novo herói e resolver isso.</p>

                                    </div>
                                    <div className="row mt-4">
                                        <Link to="/profile" className="font-weight-bold">
                                            <FiArrowLeft color="#e02041" /> Voltar para Home
                                        </Link>
                                    </div>

                                </div>

                                <div className="col-sm p-5">
                                    <form onSubmit={criarInsident} >
                                        <input
                                            value={title}
                                            onChange={e => setTitle(e.target.value)}
                                            placeholder="Titulo do caso"
                                            className="form-control" type="text" />
                                        <textarea
                                            value={description}
                                            onChange={e => setDescription(e.target.value)}
                                            placeholder="Descrição"
                                            className="form-control mt-2" cols="30" rows="4"></textarea>
                                        <input
                                            value={value}
                                            onChange={e => setValue(e.target.value)}
                                            placeholder="Valor em reais"
                                            className="form-control mt-2"
                                            type="text" />

                                        <div className="row mt-2">
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