import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity, Linking } from 'react-native'
import logoImg from '../../assets/logo.png'
import styles from './styles'
import * as  MailComposer from 'expo-mail-composer'


export default function Detail() {
    const navigation = useNavigation()
    const route = useRoute()
    const insident = route.params.insident
    const message = `Ola ${insident.pedidos_realizados[0].name}, estou entrando em contato para ser o herói do caso "${insident.title}",me sensibilizei e gostaria de ajudar com R$ ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: "BRL" }).format(insident.value)}, aguardo um retorno.`
    function navigateBack() {
        navigation.goBack()
    }
    async function sendEmail() {
        await MailComposer.composeAsync({
            subject: `Herói do caso: ${insident.title}`,
            recipients: [insident.pedidos_realizados[0].email],
            body: message
        })
    }

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=55${insident.pedidos_realizados[0].whatsapp}&text=${message}`)

    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity
                    onPress={navigateBack}
                >
                    <Feather name={'arrow-left'} size={28} color="#e82041" />
                </TouchableOpacity>

            </View>
            <View style={styles.insident} >
                <Text style={styles.insidentProperty}>ONG:</Text>
    <Text style={styles.insidentValue}>{insident.pedidos_realizados[0].name} de {insident.pedidos_realizados[0].city}, {insident.pedidos_realizados[0].uf}</Text>

                <Text style={styles.insidentProperty}>Caso:</Text>
                <Text style={styles.insidentValue}>{insident.title}</Text>

                <Text style={styles.insidentProperty}>Valor:</Text>
                <Text style={styles.insidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: "BRL" }).format(insident.value)}</Text>

            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle} >Salve O dia!, Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription} >Entre em Contato:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText} >WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText} >Email</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    )
}