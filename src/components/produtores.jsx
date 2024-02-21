import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";

import useProdutores from "../hooks/useProdutores";
import Produtor from "./produtor";

export default function Produtores({topo: ComponentTopo}) {
    const [titulo, lista] = useProdutores();

    const TopoLista = () => {
        return <>
            <ComponentTopo />
            <Text style={estilo.titulo}>{ titulo }</Text>
        </>
    }

    return <FlatList
    data={lista}
    renderItem={({ item }) => <Produtor {...item} />}
    //keyExtractor={(nome) => nome}
    ListHeaderComponent={TopoLista} />
}

const estilo = StyleSheet.create ({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
})