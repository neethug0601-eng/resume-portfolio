// JavaScript functionality for the portfolio

function displayCurrentDateTime() {
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toISOString().replace('T', ' ').substring(0, 19);
    console.log('Current Date and Time (UTC):', formattedDateTime);
}

displayCurrentDateTime();