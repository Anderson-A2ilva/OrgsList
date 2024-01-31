import React from "react";

import ComponentTopo from '../../components/topo';
import ComponentProdutores from '../../components/produtores';

export default function Home () {
    return  <ComponentProdutores topo= {ComponentTopo}/>
}