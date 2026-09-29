export function rubricExcellent(score) {
    if (Number(score) > 8) {
        return "Excellent";
    } else {
        return "Pass";
    }
}