export interface CuentasTarjetas {
    cuentas:  Cuenta[];
    tarjetas: Tarjeta[];
}

export interface Cuenta {
    titulo:      string;
    codigo:      string;
    cantidad:    number;
    disponible:  number;
    movimientos: number;
}

export interface Tarjeta {
    titular:  string;
    codigo:   number;
    dinero:   number;
    objetivo: number;
}
