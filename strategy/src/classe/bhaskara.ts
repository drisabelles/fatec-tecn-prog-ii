import Calculo from "../interfaces/calculo";

export default class Bhaskara implements Calculo {
  calcular(valores: number[]): number {
    let bhaskara = valores[0];
    for (let index = 1; index < valores.length; index++) {
      bhaskara = bhaskara / valores[index];
    }
    return bhaskara;
  }
}
