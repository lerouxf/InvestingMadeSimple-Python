new Chart(document.getElementById("pieLow"), {
    type: 'pie',
    data: {
        labels: ["Globally diversified fund"],
        datasets: [{
            label: "",
            data: [1]
        }]
    },
    options: {
        plugins: {
            colorschemes: {

             }
        }
    }
});

new Chart(document.getElementById("pieModerate"), {
    type: 'pie',
    data: {
        labels: ["S&P 500", "Technology", "REITS", "Dividend Stocks", "Global exposure", "Aggregate bonds", "Federal bonds"],
        datasets: [{
            label: "",
            data: [25,10,10,20,10,10,15]
        }]
    },
    options: {
        plugins: {
            colorschemes: {
                scheme: 'tableau.Classic10'
             }
        }
    }
});

new Chart(document.getElementById("pieRisky"), {
    type: 'pie',
    data: {
        labels: ["S&P 500", "Technology", "REITS", "Dividend Stocks", "Global exposure",],
        datasets: [{
            label: "",
            data: [35,25,10,20,10]
        }]
    },
    options: {
        plugins: {
            colorschemes: {
                scheme: 'tableau.Classic10'
             }
        }
    }
});
