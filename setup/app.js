const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];


const giveaway = document.querySelector(".giveaway")
const items = document.querySelectorAll(".deadline-format h4")
const deadline = document.querySelector(".deadline")

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

// let futureDate = new Date(2022, 6, 17, 8, 30, 0)
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 8, 30, 0)

console.log(futureDate)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

let month = futureDate.getMonth()
console.log(month)
month = months[month]
console.log(month)

const date = futureDate.getDate()
console.log(date)

let weekday = weekdays[futureDate.getDay()]
console.log(weekday)

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`

// future time in milliseconds
const futureTime = futureDate.getTime()

console.log(futureTime)

getRemainingTime = () => {
    const today = new Date().getTime()

    // console.log(today)

    const t = futureTime - today

    // console.log(t)

    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60mins
    // 1d = 24hr

    // values in milliseconds
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000
    const oneSecond = 1000

    // calculate all values
    let days = t / oneDay
    days = Math.floor(days)

    let hours = Math.floor((t % oneDay) / oneHour)
    let minutes = Math.floor((t % oneHour) / oneMinute)
    let seconds = Math.floor((t % oneMinute) / oneSecond)

    // set values array
    const values = [days, hours, minutes, seconds]

    const format = (item) => {
        if (item < 10) {
            return item = `0${item}`
        }
        return item
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index])
    })
    if (t < 0) {
        clearInterval(countdown)
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
    }
}

// count down
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()