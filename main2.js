function calcularx2() {

    var x2 = parseInt(document.getElementById('x2').value);
    var ec12= (1-(2*Math.cos(x2))-(3*Math.cos(x2)**2))/(Math.sin(x2)**2)
    var ec23= (1-(3*Math.cos(x2)))/(1-Math.cos(x2))
    if (ec12==ec23) {
        var ec12= (1-(2*Math.cos(20))-(3*Math.cos(20)**2))/(Math.sin(20)**2)
        var ec23=  (1-(3*Math.cos(20)))/(1-Math.cos(20))}
            if (ec12==ec23) {
            document.getElementById('result2').innerHTML = ('Tu identidad es correcta')}
    else {
    document.getElementById('result2').innerHTML = ('Tu identidad es incorrecta')}
}