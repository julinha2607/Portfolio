export function convertHourStringToMinutes (hourString: string) {
    const [hours,minutes] = hourString.split (':').map(Number)
    
    const minuesAmount = (hours * 60) + minutes; 

    return minuesAmount;

}