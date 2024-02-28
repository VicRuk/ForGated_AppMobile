import { StyleSheet } from "react-native";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
    box:{
        backgroundColor: '#FFF',
        width: '90%',
        left: 20,
        height: 45,
        flexDirection: "row",
        marginBottom: 5,
        borderRadius: 3,
        borderWidth: 1,
    },

    cod:{
        top:0,
        bottom: 0,
        width: 50,
        backgroundColor: '#EDF1FC',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3,
    },

    textCod:{
        fontWeight: 'bold',
        fontSize: 18,
    },

    registro:{
        top:0,
        bottom: 0,
        backgroundColor: '#fff',
        alignItems: "flex-start",
        justifyContent: "center",
        width: 318,
        borderRadius: 3,
    },

    textRegistro:{
        left: 15,
    },

})