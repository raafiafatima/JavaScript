// Dates

const myDate = new Date(); // type: Object

// console.log(myDate.toDateString()); // Thu Jul 10 2025
// console.log(myDate.toString()); // Thu Jul 10 2025 07:11:13 GMT+0500 (Pakistan Standard Time)
// console.log(myDate.toISOString()); // 2025-07-10T02:11:13.166Z
// console.log(myDate.toJSON()); // 2025-07-10T02:11:13.166Z
// console.log(myDate.toLocaleString()); //10/07/2025, 07:11:13
// console.log(myDate.toLocaleDateString()); // 10/07/2025
// console.log(myDate.toLocaleTimeString()); // 07:11:13
// console.log(myDate.toTimeString()); //07:12:56 GMT+0500 (Pakistan Standard Time)

// to create a specific date
// let createdate = new Date(2023, 0, 23, 5, 3, 23) // months start from 0
// some other ways to declare a date
let createdate = new Date("2025-7-10");
// let createdate = new Date('10-07-2025')
// console.log(createdate.toLocaleString()); // year, month, day, hour, minute, second

// Time: mostly used in making poles and comparing time for reservations

let timeStamp = Date.now();
// console.log(timeStamp)
// console.log(createdate.getTime())

// if(timeStamp > createdate.getTime()){
//     console.log('the room has been booked')
// }

// interview question: to convert into milliseconds?? idk

// console.log(Math.floor(timeStamp / 1000));

let newdate = new Date();
// console.log(newdate);
// console.log(newdate.getMonth() + 1); // b/c month starts from 0
// console.log(newdate.getDay()); // this shows that it is Thursay, day of the week
// console.log(newdate.getDate()); // this shows the day of the month

console.log(
  newdate.toLocaleString("default", {
    minute: "numeric",
    weekday: "long",
    timeZone: "utc",
  })
);

// +++++++++++++++++ PRACTICE PROBLEM OF SORTS ++++++++++++++++

// PROBLEM: Write code to check if the newBooking overlaps with any of the existingBookings. If it does, print "Booking conflict!". If not, print "Room available!".
const existingBookings = [
  {
    start: new Date("2025-07-10T08:00:00"),
    end: new Date("2025-07-10T09:00:00"),
  },
  {
    start: new Date("2025-07-10T10:30:00"),
    end: new Date("2025-07-10T11:30:00"),
  },
  {
    start: new Date("2025-07-10T13:00:00"),
    end: new Date("2025-07-10T14:00:00"),
  },
];

const newBooking = {
  start: new Date("2025-07-10T10:00:00"),
  end: new Date("2025-07-10T11:00:00"),
};

for (let i = 0; i < existingBookings.length; i++) {
    const start1 = newBooking.start
    const end1 = newBooking.end

    let start2 = existingBookings[i].start
    let end2 = existingBookings[i].end

    if(start1 < end2 && start2 < end1){
        console.log(`There is an overlap with Booking ${i+1} at time ${start2.toLocaleString()}`)
    }
    else{
        console.log(`No overlap with Booking ${i+1} at time ${start2.toLocaleString()}`)
    }
}

// the end :|

