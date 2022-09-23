function calculadora(){
    let peso=document.getElementById('peso').value;
    let altura=document.getElementById('altura').value;
    let resultado;
    if (altura>0.35&&altura<3) {
        resultado=peso/(Math.pow(altura,2))
        document.getElementById('resultado_imc').textContent=resultado.toFixed(1);
    }else if (altura>35&&altura<300) {
        let alturaMt=altura/100
        resultado=peso/(Math.pow(alturaMt,2))
        document.getElementById('resultado_imc').textContent=resultado.toFixed(1);
    }else{
        alert("Los datos son incorrectos")
    }
    if (resultado<18.5) {
        document.getElementById('resultado_imc').style.backgroundColor='#5EC0EA';
        document.getElementById('resultado_imc').style.color='white';
    }
    if (resultado>=18.5&&resultado<=24.9) {
        document.getElementById('resultado_imc').style.backgroundColor='#5EEAE8';
        document.getElementById('resultado_imc').style.color='white';
    }
    if (resultado>=25&&resultado<=29.9) {
        document.getElementById('resultado_imc').style.backgroundColor='#5EEA71';
        document.getElementById('resultado_imc').style.color='white';
    }
    if (resultado>=30&&resultado<=34.9) {
        document.getElementById('resultado_imc').style.backgroundColor='#EAAA3A';
        document.getElementById('resultado_imc').style.color='white';
    }
    if (resultado>=35) {
        document.getElementById('resultado_imc').style.backgroundColor='#F90909';
        document.getElementById('resultado_imc').style.color='white';
    }
}
function reiniciar(){
    document.getElementById('resultado_imc').style.backgroundColor='white';
    document.getElementById('resultado_imc').textContent="";
    document.getElementById('peso').value=""
    document.getElementById('altura').value="";
    
}

let calcular=document.getElementById('calcular');
calcular.addEventListener('click',calculadora);

let reinicio=document.getElementById('reiniciar');
reinicio.addEventListener('click',reiniciar);