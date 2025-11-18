function Convert12to24(timeString){
    const [time, stamp] = timeString.split(' ')
    let [hour, minutes] = time.split(':')

    if(hour === '12') hour = '00'
    if(stamp === 'PM') hour = parseInt(hour) + 12
    return `${hour}:${minutes}`
}


console.log(Convert12to24('01:14 PM'));
console.log(Convert12to24('12:00 PM'));
console.log(Convert12to24('12:00 AM'));
console.log(Convert12to24('11:00 AM'));