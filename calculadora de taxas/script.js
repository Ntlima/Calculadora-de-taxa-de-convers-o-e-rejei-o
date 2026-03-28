function calcularVariacao(atual, anterior) {
    if (anterior == 0) return 0;
    return ((atual - anterior) / anterior) * 100;
}

function calcular() {

    // Conversão
    let convAtual = parseFloat(document.getElementById("convAtual").value) || 0;
    let convPassado = parseFloat(document.getElementById("convPassado").value) || 0;
    let convAno = parseFloat(document.getElementById("convAno").value) || 0;

    // Rejeição
    let rejAtual = parseFloat(document.getElementById("rejAtual").value) || 0;
    let rejPassado = parseFloat(document.getElementById("rejPassado").value) || 0;
    let rejAno = parseFloat(document.getElementById("rejAno").value) || 0;

    // Cálculos
    let convMoM = calcularVariacao(convAtual, convPassado);
    let convYoY = calcularVariacao(convAtual, convAno);

    let rejMoM = calcularVariacao(rejAtual, rejPassado);
    let rejYoY = calcularVariacao(rejAtual, rejAno);

    // Exibição
    document.getElementById("resultado").innerHTML = `
        <h5>📊 Conversão</h5>
        MoM: ${convMoM.toFixed(2)}% <br>
        YoY: ${convYoY.toFixed(2)}%

        <hr>

        <h5>📉 Rejeição</h5>
        MoM: ${rejMoM.toFixed(2)}% <br>
        YoY: ${rejYoY.toFixed(2)}%
    `;
}