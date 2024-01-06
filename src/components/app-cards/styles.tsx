import { StyleSheet } from "react-native";

export const appCardStyles = StyleSheet.create({
    appCard:{
        elevation:2,
        backgroundColor:'#fff',
        height:150,
        borderRadius:15
    },
    cardNameCntr:{
        position: 'absolute',
        left:0,
        top:0,
        // backgroundColor:'rgba(200, 200, 200,0.5)',
        
        height:'100%',
        width:'100%',
        // justifyContent:'center',
        borderRadius: 15
    },
    cardName:{
        fontSize: 32,
        color:'black',
        paddingLeft: 18,
        backgroundColor:'rgba(220, 220, 220,0.7)',
        width:'50%',
        height:'50%',
        borderTopRightRadius:12,
        borderBottomRightRadius:12,
        fontWeight:'600',
        textAlignVertical:'center'
    }

})


