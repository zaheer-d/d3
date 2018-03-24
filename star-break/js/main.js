/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

var svg = d3
    .select('#chart-area')
    .append('svg')
    .attr('width', 500)
    .attr('height', 500);

console.log('svg', svg);

d3.json('./data/revenues.json', (error, data) => {
    console.log('data', data);
    data.forEach(d => {
        d = +d.revenue;
    });

    rects = svg.selectAll('rect').data(data);

    rects
        .enter()
        .append('rect')
        .attr('x', 50)
        .attr('y', 50)
        .attr('width', 50)
        .attr('height', d => {
            return d.revenue;
        })
        .attr('fill', 'orangered');
});
