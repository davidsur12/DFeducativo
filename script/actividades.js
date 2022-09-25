var arreglo = [{ pregunta: 0, res: "a" }];
var arreglo2 = [0, 2];

var pre = [];
var res = [];

function respuesta1(id, respuesta) {
    var agregado = false;
    for (var i = 0; i < arreglo.length; i++) {
        alert("indice " + i + " valor " + arreglo[i].pregunta);
        if (arreglo[i, 0].pregunta == id) {
            agregado = true;
            alert("encontrado" + arreglo[i, 0].pregunta);

        }

    }
    if (agregado) {
        arreglo[id, 0].pregunta = id;
        arreglo[id, 1].res = respuesta;
    }
    else {
        arreglo.push({ pregunta: id, res: respuesta });
    }


    //arreglo[1].pregunta=3 ;
    // arreglo[1].res="prue";
    //arreglo2.push = new Array(id, respuesta);
    alert("respuesta recibida " + arreglo[1, 0].pregunta + " " + arreglo[1, 1].res + "  " + arreglo.length);


}

function respuesta2(id, respuesta) {

   
    var agregado = false;
    var index = 0;
    for (var i = 0; i < pre.length; i++) {
        if (pre[i] == id) {
            agregado = true;
            index = i;
            break;
        }
    }
    if (agregado) {
        res[index] = respuesta;

    }else{
        pre.push(id);
        res.push(respuesta);
    }
    for (var j = 0; j < res.length; j++) {
        alert("index " + j + " pregunta " + pre[j] + " respuesta " + res[j]);

    }
    location.href = "lecsion2.html";
}