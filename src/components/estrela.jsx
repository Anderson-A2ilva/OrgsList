import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";

import estrela from '../assets/estrela.png'
import estrelaCinza from '../assets/estrelaCinza.png'

export default function Estrela({
    onPress,
    desabilitada = true,
    preenchida,
    grande = false,
}) {
    const estilos = estilosFunction(grande);
    const getImagem = () => {
        if (preenchida) {
            return estrela;
        }
        return estrelaCinza;
    }

    return <TouchableOpacity
        onPress={onPress}
        disabled={desabilitada}
        >
        <Image source={getImagem()} style={estilos.estrela} />
    </TouchableOpacity>
}

const estilosFunction = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 32 : 12,
        height: grande ? 32 : 12,
    }
})