import React from 'react';
import * as d3 from 'd3';

//Styles
import './skills-diagram.css';


export default class SkillsDiagram extends React.Component {
    render() {
        return (
            <div className='skills-diagram-container'>
                <div className='skills-diagram-canvas'>

                </div>
            </div>
        );
    }

    componentDidMount() {
        this.drawChart();
    }

    drawChart = () => {
        // const data = [{
        //     title: 'JavaScript',
        //     name: 'javascript',
        //     value: 100,
        // }];
        // const svg = d3.select(DOM.svg(width, height))
        //     .style("width", "100%")
        //     .style("height", "auto")
        //     .attr("font-size", 10)
        //     .attr("font-family", "sans-serif")
        //     .attr("text-anchor", "middle");
        const data = [20, 5, 6, 6, 9, 10];
        const svg = d3.select(".skills-diagram-canvas").append("svg").attr("width", 700).attr("height", 300);
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", 0)
            .attr("width", 50)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green");
    }


}