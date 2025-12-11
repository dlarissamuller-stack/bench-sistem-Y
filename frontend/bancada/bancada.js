window.onload = () => {
    pooling(5)
}

function pooling(segundos) {
    setTimeout(() => {
        console.log('buscando...')
        buscarDadosBancada()
    pooling(segundos)
    }, segundos * 1000);
}

function buscarDadosBancada() {
    fetch('http://10.77.241.113:1893/api/smartsense/estoque')
    .then(res => res.json())
    .then(data => {
    console.log(data)
    })
}
