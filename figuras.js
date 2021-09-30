// Código del Cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
 console.log("Los lados del cuadrado miden: " + ladoCuadrado + "CM");

 const perimetroCuadrado = ladoCuadrado * 4;
 console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "CM");

 const areaCuadrado = ladoCuadrado * ladoCuadrado;
 console.log("El area del cuadrado es: " + areaCuadrado + "CM^2");
 console.groupEnd();
 
 // Código del Triangulo
console.group("Triangulo");
 const ladoTriangulo1 = 6;
 const ladoTriangulo2 = 6;
 const baseTriangulo = 4;
 console.log(
     "Los lados del triangulo miden: "
     + ladoTriangulo1
     + "CM, "
     + ladoTriangulo2
     + "CM, "
     + baseTriangulo
     + "CM"
     );

     const alturaTriangulo = 5.5;
     console.log("La altura del triangulo es de: " + alturaTriangulo + "CM");

     const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
     console.log("El perimetro del triangulo es: " + perimetroTriangulo + "CM");

     const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
     console.log("El area del triangulo es: " + areaTriangulo + "CM^2");

     console.groupEnd();


    //  Código del Circulo
    console.group("Circulo");

    // Radio
    const radioCirculo = 4;
    console.log("El radio del circulo es: " + radioCirculo + "CM");

    // Diámetro
    const diametroCirculo = radioCirculo * 2;
    console.log("El diametro del circulo es: " + diametroCirculo + "CM");

    // PI 
    const PI = Math.PI;
    console.log("PI es: " + PI);

    // Circunferencia
    const perimetroCirculo = diametroCirculo * PI;
    console.log("El perimetro del circulo es: " + perimetroCirculo + "CM");

    // Area
    const areaCirculo = (radioCirculo * radioCirculo) * PI;
    console.log("El area del circulo es: " + areaCirculo + "CM^2");
    console.groupEnd();