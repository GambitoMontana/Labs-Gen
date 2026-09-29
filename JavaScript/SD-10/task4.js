export class FriendAge {
    constructor(nombre, an, mn, dn) {
        this.nombre = nombre;
        this.an = an; 
        this.mn = mn; 
        this.dn = dn; 
    }
    
    returnAge() {
        const hoy = new Date();
        const cumple = new Date(this.an, this.mn, this.dn);
        
        let edad = hoy.getFullYear() - cumple.getFullYear();
        const diferenciaMeses = hoy.getMonth() - cumple.getMonth();

        if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < cumple.getDate())) {
            edad--;
        }

        return `${this.nombre} is ${edad} today!`;
    }
}