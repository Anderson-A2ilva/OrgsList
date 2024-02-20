import React from "react";
import {StyleSheet, View } from "react-native";
import { useState } from "react";
import Estrela from "./estrela";

export default function estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,
}) {
    const [ quantidade, setQuantidade ] = useState(quantidadeAntiga);

    const RenderEstrelas = () => {
        const listaEstrelas = [];
        for (let i = 0; i < 5; i++) {
            listaEstrelas.push(
                <Estrela  
                key={i}
                onPress={() => setQuantidade(i + 1)}
                desabilitada = {!editavel}
                preenchida={i < quantidade}
                grande={grande}
                />
            )
        }
        return listaEstrelas;
    }

    return <View style={estilos.estrelas}>
        <RenderEstrelas />
    </View>
}

const estilos = StyleSheet.create({
    estrelas: {
        flexDirection: 'row',
        marginRight: 8,
    },
})