let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = false;
let runnerAge = 18;

if (runnerAge > 18 && earlyRegistration === true) {
    raceNumber = (raceNumber + 1000);
}
if (runnerAge > 18 && earlyRegistration === true) {
    console.log('Racers: ' + raceNumber + ' your race will begin at 9:30 am');
}
else if (runnerAge > 18 && earlyRegistration === false) {
    console.log('Racers: ' + raceNumber + ' will race at 11:00 am');
}
else if (runnerAge < 18) {
    console.log('Youth runners: ' + raceNumber + ' will race at 12:30 pm');
}
else {
    console.log('see the registration desk');
}


