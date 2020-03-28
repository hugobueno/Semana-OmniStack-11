import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import logoImg from "../../assets/logo.svg"
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './styles.css'
import api from '../../services/api'


export default function Profile() {
    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongid')
    const [insidents, setInsidentes] = useState([])
    const history = useHistory()

    useEffect(() => {
        api.get('profile', {
            headers: {
                Autorization: ongId
            }
        }).then((response) => {
            setInsidentes(response.data)

        }).catch((error) => {

        })
    }, [ongId])

    async function DeleteInsident(id) {
        try {
            api.delete(`insidents/${id}`)
            setInsidentes(insidents.filter(insident => insident._id !== id))

        } catch (error) {
            alert("erro ao deletar, tente mais tarde.")

        }
    }

    async function Logout() {
        localStorage.clear()
        history.push('/')
    }
    return (
        <div className="container">
            <header className="d-flex p-3 align-items-center justify-content-between " >

                <div className="d-flex  align-items-center ">
                    <img width="50%" src={logoImg} alt="be the Hero" />
                    <h5 className="ml-4">Bem vindo(a) {ongName}</h5>
                </div>
                <div>

                    <Link to="/insidents/new" type="submit" className="btn btn-person-profile-novo">Novos Casos</Link>


                    <button onClick={Logout} type="button" className="btn btn-person-profile-logout ml-2 "><FiPower /></button>

                </div>
            </header>
            <section>
                <div className="row justify-content-center mt-4">
                    <h4>Casos Cadastrados</h4>
                </div>
                <div className="row mt-5 person-cards-profile">
                    {insidents.map(insident => (
                        <div key={insident._id} className="col-sm-6 mt-2">
                            <div className="card ">
                                <div className="card-body">
                                    <strong>Caso:</strong>
                                    <p>{insident.title}</p>

                                    <strong>Descrição:</strong>
                                    <p>{insident.description}</p>

                                    <strong>Valor:</strong>
                                    <p> {Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(insident.value)} Reais</p>
                                    <button onClick={() => DeleteInsident(insident._id)} style={{ backgroundColor: "#fff", border: "none" }} type="button">
                                        <FiTrash2 color="#a8a8b3" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
            </section>
        </div>
    )
}