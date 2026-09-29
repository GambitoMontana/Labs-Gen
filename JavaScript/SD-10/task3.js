export function ageCalculator(an, mn, dn) {
    const hoy = new Date();
    const cumple = new Date(an, mn, dn);
    
    let edad = hoy.getFullYear() - cumple.getFullYear();
    const diferenciaMeses = hoy.getMonth() - cumple.getMonth();

    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < cumple.getDate())) {
        edad--;
    }

    return edad;
}