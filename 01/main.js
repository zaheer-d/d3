var svg = d3
    .select('#canvas')
    .append('svg')
    .attr('width', 500)
    .attr('height', 400);
svg
    .append('rect')
    .attr('width', 200)
    .attr('height', 100)
    .attr('fill', 'yellow');
svg
    .append('circle')
    .attr('cx', 150)
    .attr('cy', 150)
    .attr('r', 25)
    .attr('fill', 'red');
svg
    .append('line')
    .attr('x1', 180)
    .attr('y1', 250)
    .attr('x2', 250)
    .attr('y2', 280)
    .attr('stroke', 'blue')
    .attr('stroke-width', 5);
