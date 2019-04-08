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
        const dataSet = {
            children: [
                {
                    name: "JavaScript",
                    size: 4319,
                    color: 'red',
                },
                {
                    name: "React Js",
                    size: 3000,
                    color: 'blue',
                },
                {
                    name: "CSS",
                    size: 1487,
                    color: 'green',
                },
                {
                    name: "HTML",
                    size: 1636,
                    color: '#ededed',
                }
            ]
        };

        const diameter = 600; //window.innerWidth - 50 ||  600;

        //Draw SVG canvas
        const svg = d3.select(".skills-diagram-canvas")
            .append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .attr("class", "bubble");

        const nodes = d3.hierarchy(dataSet)
            .sum(function (d) {
                return d.size;
            });

        const bubble = d3.pack(dataSet)
            .size([diameter, diameter])
            .padding(1.5);

        const node = svg.selectAll(".node")
            .data(bubble(nodes).descendants())
            .enter()
            .filter((d) => {
                return !d.children;
            })
            .append("g")
            .attr("class", "node")
            .attr("transform", (d) => {
                return "translate(" + d.x + "," + d.y + ")";
            });

        //Append Circle Graphics to Node
        node.append("circle")
            .attr("r", (d) => {
                return d.r;
            })
            .style("fill", (d, i) => {
                return d.data.color;
            });


        //Append Titles of circle
        node.append("text")
            .attr("dy", ".2em")
            .style("text-anchor", "middle")
            .text(function (d) {
                return d.data.name.substring(0, d.r / 3);
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", (d) => {
                return d.r / 5;
            })
            .attr("fill", "white");

        //Text of Number
        node.append("text")
            .attr("dy", "1.3em")
            .style("text-anchor", "middle")
            .text((d) => {
                return d.data.size;
            })
            .attr("font-family", "Gill Sans", "Gill Sans MT")
            .attr("font-size", function (d) {
                return d.r / 5;
            })
            .attr("fill", "white");

    }


}