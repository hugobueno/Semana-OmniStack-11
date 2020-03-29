import { StyleSheet } from 'react-native'
import Contants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Contants.statusBarHeight + 20,
    },
    header:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    insidentList: {
        marginTop: 32,
    },
    insident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginTop: 40,
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
    contactBox:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginTop: 10,

    },
    heroTitle:{
        fontWeight:'bold',
        fontSize:20,
        color:'#13131a',
        lineHeight:25
    }, 
    heroDescription:{
        fontSize:15,
        color:'#737380',
        marginTop:16
    },
    actions:{
        marginTop:16,
        flexDirection:'row',
        justifyContent:'space-between'
   },
   action:{
       backgroundColor: '#e02041',
       borderRadius:8,
       height:50,
       width: "48%",
       justifyContent:'center',
       alignItems:'center'
       
   },
   actionText:{
       color: '#fff',
       fontSize:15,
       fontWeight:'bold'
   }
})