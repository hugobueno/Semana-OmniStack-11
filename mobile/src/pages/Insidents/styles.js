import { StyleSheet } from 'react-native'
import Contants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Contants.statusBarHeight + 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerText: {
        fontSize: 15,
        color: "#737380"
    },
    headerTextBold: {
        fontWeight: 'bold',
    },
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: "#131310",
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },
    insidentList: {
        marginTop: 32,
    },
    insident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginTop: 16,
    },
    insidentProperty: {
        marginTop:8,
        fontSize: 14,
        color: "#41414d",
        fontWeight: 'bold'

    },
    insidentValue: {
        fontSize: 15,
        marginTop: 10,
        color: '#737380'

    },
    detailButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop:15
    },
    detailsButtonText: {
        fontSize: 17,
        fontWeight:'bold'

    },
    icon: {
        marginTop:5,
        fontSize: 25
    }

})