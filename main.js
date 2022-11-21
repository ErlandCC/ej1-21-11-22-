function calcularx() {

    var x = parseInt(document.getElementById('x').value);
    var ec1= (Math.sin(x)+Math.cos(x))**2
    var ec2= 1+(2*Math.sin(x)*Math.cos(x))
    if (ec1==ec2) {
        var ec1= (Math.sin(20)+Math.cos(20))**2
        var ec2= 1+(2*Math.sin(20)*Math.cos(20))}
            if (ec1==ec2) {
            document.getElementById('result').innerHTML = ('Tu identidad es correcta' )}
    else {
    document.getElementById('result').innerHTML = ('Tu identidad es incorrecta')}
}