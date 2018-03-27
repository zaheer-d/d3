/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

//set margings
var margins = {top: 10, left: 10, right: 10, bottom: 10};

// set width and height, remove margins from total svg
var width = 600 - (margins.left + margins.right),
    height = 400 - (margins.top + margins.bottom);

//create group
var group = d3
    .select('#chart-area')
    .append('svg')
    .attr('width', width + margins.left + margins.right)
    .attr('height', height + margins.top + margins.bottom)
    .append('g')
    .attr('transform', 'translate('+margins.left+','+margins.top+')');

var xLabels = '';
var yLabels = '';

d3.json('./data/revenues.json', (error, data) => {
    console.log('data', data);
    data.forEach(d => {
        d = +d.revenue;
    });

    // setup scales.
    var x = d3.scaleBand().domain(data.map(d => d.month)).range([0, width]).padding('0.3'); // x scale
    var y = d3.scaleLinear().domain([0, d3.max(data, d => d.revenue)]).range([height, 0]); // y scale

    rects = group.selectAll('rect').data(data);

    rects
        .enter()
        .append('rect')
        .attr('x', d => x(d.month))
        .attr('y', d => y(d.revenue))
        .attr('width', x.bandwidth())
        .attr('height', d => height - y(d.revenue))
        .attr('fill', 'orangered');
});
