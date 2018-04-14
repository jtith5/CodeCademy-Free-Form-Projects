const getSleepHours = (day) =>{
    switch (day) {
        case 'monday':
            return 8;
        case 'tuesday':
            return 7;
        case 'wednesday':
            return 6;
        case 'thursday':
            return 5;
        case 'friday':
            return 4;
        case 'saturday':
            return 3;
        case 'sunday':
            return 2;
        default:
            return 'Not a day';
    }

    // if (day === 'monday'){
    //     return 8;
    // }
    // else if (day === 'tuesday'){
    //     return 7;
    // }
    // else if (day === 'wednesday') {
    //     return 7;
    // }
    // else if (day === 'wednesday') {
    //     return 7;
    // }
    // else if (day === 'wednesday') {
    //     return 7;
    // }
    // else if (day === 'wednesday') {
    //     return 7;
    // }
};
console.log(getSleepHours('saturday'));

const getActualSleepHours = () => {
return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') +
    getSleepHours('thursday') + getSleepHours('friday') +
        getSleepHours('saturday') + getSleepHours('sunday');

}
const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours*7;
}
console.log(getActualSleepHours() + ' hours slept');
console.log(getIdealSleepHours() + ' hours of sleep ideally');

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours ()

    if (actualSleepHours === idealSleepHours) {
        console.log('user got the perfect amount of sleep');
    }
        else if (actualSleepHours > idealSleepHours) {
            console.log('user got ' + (actualSleepHours - idealSleepHours) +
                ' hours more sleep than needed');
            }
        else if (actualSleepHours < idealSleepHours) {
            console.log('user should get ' + (idealSleepHours - actualSleepHours) +
                ' hours more rest');
    }
}
calculateSleepDebt();