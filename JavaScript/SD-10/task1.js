export function costCalculator(transaccion) {
    const monto = Number(transaccion);
    const total = (monto * 0.01) + monto + 3;
    return total;
}