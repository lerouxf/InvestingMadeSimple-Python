let startingAmount = 10000;
let annualReturn = 8;
let minYear = 2020;
let maxYear = 2030;
let xlabels = years();
let yData = amounts();

let ctx = document.getElementById('chart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xlabels,
        datasets: [{
            data: yData,
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        labels: {
            fontFamily : "Quicksand"
        },
        legend: {
            display: false,
            responsive: false
        }
    },
});

function addYear() {
    maxYear += 1;
    addLabel(chart, maxYear, getAmount(maxYear));
    updateData();
}

function removeYear() {
    maxYear--;
    removeLabel(chart);
    updateData();
}

function addMoney() {
    startingAmount += 1000;
    updateData();
}

function removeMoney() {
    startingAmount -= 1000;
    updateData();
}

function addAnnualReturn() {
    annualReturn += 1;
    updateData();
}

function removeAnnualReturn() {
    annualReturn -= 1;
    updateData();
}

function years() {
    let yearList = [];
    for (let i = minYear; i <= maxYear; i++) {
        yearList.push(i);
    }
    return yearList;
}

function amounts() {
    let amountList = [];
    for (let i = minYear; i <= maxYear; i++) {
        amountList.push(getAmount(i));
    }
    return amountList;
}

function getAmount(year) {
    let amount = startingAmount;
    let yearsDifference = year - minYear;
    while(yearsDifference !== 0){
        amount = amount + (amount * (annualReturn / 100));
        yearsDifference--;
    }
    return amount;
}

function getStartingAmount() {
    return "$" + startingAmount;
}
document.getElementById("startingAmount").innerHTML =getStartingAmount();

function getEndAmount() {
    return "$" + getAmount(maxYear).toFixed(2);
}
document.getElementById("endAmount").innerHTML =getEndAmount();

function getYearsOfGrowth() {
    return (maxYear - minYear) + " years";
}
document.getElementById("yearsOfGrowth").innerHTML =getYearsOfGrowth();

function getAnnualReturn() {
    return annualReturn + "%";
}
document.getElementById("annualReturn").innerHTML =getAnnualReturn();

function addLabel(chart1, label, data) {
    chart1.data.labels.push(label);
    chart1.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart1.update();
}

function removeLabel(chart1) {
    chart1.data.labels.pop();
    chart1.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart1.update();
}

function updateData() {
    let yearList = years()
    for (let index = 0; index < yearList.length; ++index) {
        chart.data.datasets[0].data[index] = getAmount(yearList[index]);
    }
    document.getElementById("yearsOfGrowth").innerHTML = getYearsOfGrowth();
    document.getElementById("startingAmount").innerHTML = getStartingAmount();
    document.getElementById("endAmount").innerHTML = getEndAmount();
    document.getElementById("annualReturn").innerHTML = getAnnualReturn();
    chart.update();
}