import green from '../assets/produtores/green.png';
import grow from '../assets/produtores/grow.png';
import jennyjack from '../assets/produtores/jenny-jack.png';
import potager from '../assets/produtores/potager.png';
import salad from '../assets/produtores/salad.png';


const gerarNumaroAleatorio = (min, max)=> {
    return Math.floor(Math.random() *(max - min +1)+ min);
}

const produtores = {
    titulo: 'Produtores',
    lista: [
    {
        nome: 'Green',
        imagem: green,
        distancia: `${gerarNumaroAleatorio(1, 500)}m`,
        estrelas: gerarNumaroAleatorio(1, 5),
    },
    {
        nome: 'Grow',
        imagem: grow,
        distancia: `${gerarNumaroAleatorio(1, 500)}m`,
        estrelas: gerarNumaroAleatorio(1, 5),
    },
    {
        nome: 'Jenny Jack Farm',
        imagem: jennyjack,
        distancia: `${gerarNumaroAleatorio(1, 500)}m`,
        estrelas: gerarNumaroAleatorio(1, 5),
    },
    {
        nome: 'Potager',
        imagem: potager,
        distancia: `${gerarNumaroAleatorio(1, 500)}m`,
        estrelas: gerarNumaroAleatorio(1, 5),
    },
    {
        nome: 'Salad',
        imagem: salad,
        distancia: `${gerarNumaroAleatorio(1, 500)}m`,
        estrelas: gerarNumaroAleatorio(1, 5),
    }
]
}

export default produtores;