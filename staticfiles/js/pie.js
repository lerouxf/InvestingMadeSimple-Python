new Chart(document.getElementById("pieLow"), {
    type: 'pie',
    data: {
        labels: ["Globally diversified fund"],
        datasets: [{
            label: "",
            backgroundColor: ["grey"],
            data: [1]
        }]
    },
    options: {
        title: {
            display: false,
        }
    }
});

new Chart(document.getElementById("pieModerate"), {
    type: 'pie',
    data: {
        labels: ["S&P 500", "Technology", "REITS", "Dividend Stocks", "Global exposure", "Aggregate bonds", "Federal bonds"],
        datasets: [{
            label: "",
            backgroundColor: ["red", "blue", "yellow", "orange", "green", "grey", "black"],
            data: [25,10,10,20,10,10,15]
        }]
    },
    options: {
        title: {
            display: false,
        }
    }
});

new Chart(document.getElementById("pieRisky"), {
    type: 'pie',
    data: {
        labels: ["XEQT/VEQT"],
        datasets: [{
            label: "",
            backgroundColor: ["#3e95cd"],
            data: [1]
        }]
    },
    options: {
        title: {
            display: false,
        }
    }
});