$(function() {
    $("span.pie").peity("pie", {
        fill: ['rgb(150, 0, 187)', 'rgb(150, 0, 147)', '#ffffff']
    })

    $(".line").peity("line",{
        fill: 'rgb(150, 0, 187)',
        stroke:'#169c81',
    })

    $(".bar").peity("bar", {
        fill: ["rgb(150, 0, 187)", "rgb(150, 0, 147)"]
    })

    $(".bar_dashboard").peity("bar", {
        fill: ["rgb(150, 0, 187)", "rgb(150, 0, 147)"],
        width:100
    })

    var updatingChart = $(".updating-chart").peity("line", { fill: 'rgb(150, 0, 187)',stroke:'rgb(150, 0, 187)', width: 64 })

    setInterval(function() {
        var random = Math.round(Math.random() * 10)
        var values = updatingChart.text().split(",")
        values.shift()
        values.push(random)

        updatingChart
            .text(values.join(","))
            .change()
    }, 1000);

});
