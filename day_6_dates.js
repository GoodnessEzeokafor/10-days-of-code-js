function getDayName(dateString) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let dayName;
    // Write your code here
    const date = new Date(dateString)
    const getDay = date.getDay()
    dayName = days[getDay]
    return dayName
}
