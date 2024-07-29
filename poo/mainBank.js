class CuentaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(monto) {
        this.saldo += monto;
    }

    retirar(monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
        } else {
            console.log("Saldo insuficiente");
        }
    }

    consultarSaldo() {
        return this.saldo;
    }

    transferirFondos(cuentaDestino, monto) {
        if (monto <= this.saldo) {
            this.retirar(monto);
            cuentaDestino.depositar(monto);
        } else {
            console.log("Saldo insuficiente para la transferencia");
        }
    }

    calcularIntereses(tasaInteres) {
        return this.saldo * tasaInteres / 100;
    }
}

// Ejemplo de uso
let cuenta1 = new CuentaBancaria("Carlos", 1000);
let cuenta2 = new CuentaBancaria("Maria", 500);

cuenta1.depositar(200);
console.log(cuenta1.consultarSaldo());  // 1200

cuenta1.retirar(300);
console.log(cuenta1.consultarSaldo());  // 900

cuenta1.transferirFondos(cuenta2, 400);
console.log(cuenta1.consultarSaldo());  // 500
console.log(cuenta2.consultarSaldo());  // 900

let intereses = cuenta1.calcularIntereses(5);
console.log(intereses);  // 25 (asumiendo una tasa de interés del 5%)
