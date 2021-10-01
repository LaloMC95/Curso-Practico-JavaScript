// Código del Cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "CM");

 function perimetroCuadrado(lado){
    return lado * 4;
    }
//  console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "CM");

 
 function areaCuadrado(lado){
     return lado * lado;
 }
//  console.log("El area del cuadrado es: " + areaCuadrado + "CM^2");
 console.groupEnd();
 
 // Código del Triangulo
console.group("Triangulo");
//  const ladoTriangulo1 = 6;
//  const ladoTriangulo2 = 6;
//  const baseTriangulo = 4;
//  console.log(
//      "Los lados del triangulo miden: "
//      + ladoTriangulo1
//      + "CM, "
//      + ladoTriangulo2
//      + "CM, "
//      + baseTriangulo
//      + "CM"
//      );

    //  const alturaTriangulo = 5.5;
    //  console.log("La altura del triangulo es de: " + alturaTriangulo + "CM");

     function perimetroTriangulo(lado1, lado2, base){
         return lado1 + lado2 + base;
     }
    //  console.log("El perimetro del triangulo es: " + perimetroTriangulo + "CM");

    // const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
     function areaTriangulo(base, altura){
         return (base * altura) / 2;
     }
    //  console.log("El area del triangulo es: " + areaTriangulo + "CM^2");

     console.groupEnd();


    //  Código del Circulo
    console.group("Circulo");

    // Radio
    // const radioCirculo = 4;
    // console.log("El radio del circulo es: " + radioCirculo + "CM");

    // Diámetro
    // const diametroCirculo = radioCirculo * 2;
    // console.log("El diametro del circulo es: " + diametroCirculo + "CM");
    function diametroCirculo(radio){
        return radio * 2;
    }

    // PI 
    const PI = Math.PI;
    console.log("PI es: " + PI);

    // Circunferencia
    // const perimetroCirculo = diametroCirculo * PI;
    // console.log("El perimetro del circulo es: " + perimetroCirculo + "CM");
    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }

    // Area
    // const areaCirculo = (radioCirculo * radioCirculo) * PI;
    // console.log("El area del circulo es: " + areaCirculo + "CM^2");
    function areaCirculo(radio){
        return (radio * radio) * PI;
    }
    console.groupEnd();