import Intl from 'intl'
import 'intl/locale-data/jsonp/pt-BR'


import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import logoImg from '../../assets/logo.png'
import styles from './styles'
import api from '../../services/api'

export default function Insidents() {
    const [insidents, setInsidents] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()


    function navigationToDetail(insident) {
        navigation.navigate('Detail', { insident })
    }


    async function loadIncidents() {

        if (loading) {
            return
        }

        if (total > 0) {
            return
        }

        setLoading(true)
        const response = await api.get(`insidents?page=${page}`)
        if (response) {
            setInsidents([...insidents, ...response.data])
            setTotal(total)

            setPage(page + 1)
            setLoading(false)
        }

    }

    useEffect(() => {
        loadIncidents()

    })
    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de casos <Text style={styles.headerTextBold}> 0 casos</Text>
                </Text>

            </View>
            <Text style={styles.title}>Bem Vindo(a)!</Text>
            <Text style={styles.description}>Escolha um caso e seja o heroi do dia.</Text>
            <FlatList
                data={insidents}
                style={styles.insidentList}
                keyExtractor={insident => String(insident._id)}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0}
                onEndReached={loadIncidents}
                renderItem={({ item: insident }) => (
                    <View style={styles.insident} >
                        <Text style={styles.insidentProperty}>ONG:</Text>
                        <Text style={styles.insidentValue}>{insident.pedidos_realizados[0].name}</Text>

                        <Text style={styles.insidentProperty}>Caso:</Text>
                        <Text style={styles.insidentValue}>{insident.title}</Text>

                        <Text style={styles.insidentProperty}>Valor:</Text>
                        <Text style={styles.insidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: "BRL" }).format(insident.value)}</Text>
                        <TouchableOpacity
                            style={styles.detailButton}
                            onPress={() => navigationToDetail(insident)}>
                            <Text style={styles.detailsButtonText} >Detalhes</Text>
                            <Feather style={styles.icon} name="arrow-right" size={16} color='#e02041' />
                        </TouchableOpacity>
                    </View>

                )} />

        </View>



    )
}