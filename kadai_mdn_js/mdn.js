const date = new Date ();
const [month, day ,year] = [
    date.getMonth(7) + 1,
    date.getDate(29),
    date.getFullYear(2024),
]

console.log(year + '年' + month + '月' + day + '日');