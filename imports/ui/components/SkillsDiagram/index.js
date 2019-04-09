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
                    name: 'JavaScript',
                    text: "JavaScript",
                    size: 3000,
                    color: '#e4cb01c2',
                    strokeColor: '#a99600',
                    img: '/img/logos/javascript.png',
                    url: '',
                },
                {
                    name: 'React Js',
                    text: 'React Js',
                    size: 2000,
                    color: '#61dafba8',
                    strokeColor: '#4aa6bfa8',
                    img: '/img/logos/react2.png',
                    url: 'https://reactjs.org/',
                },
                {
                    name: 'React Native',
                    text: 'React Native',
                    size: 1500,
                    color: '#05a5d1',
                    strokeColor: '#0585a9',
                    img: '/img/logos/react2.png',
                    url: 'https://facebook.github.io/react-native/',
                },
                {
                    name: "CSS",
                    size: 500,
                    color: '#298dd47a',
                    strokeColor: '#7fadd2',
                    img: '/img/logos/css3.png',
                    url: '',
                },
                {
                    name: "HTML",
                    size: 500,
                    color: '#e8783a',
                    strokeColor: '#bf6431',
                    img: '/img/logos/html.png',
                    url: '',
                },
                {
                    name: "MongoDB",
                    text: "MongoDB",
                    size: 500,
                    color: '#73c054',
                    strokeColor: '#529237',
                    //img: '/img/logos/html.png',
                    url: 'https://www.mongodb.com/',
                },
                {
                    name: "MeteorJs",
                    text: "MeteorJs",
                    size: 1200,
                    color: '#de4f4f',
                    strokeColor: '#ab3130',
                    //img: '/img/logos/html.png',
                    url: 'https://www.meteor.com/',
                },
                {
                    name: "NodeJs",
                    text: "NodeJs",
                    size: 800,
                    color: '#026e00',
                    strokeColor: '#015000',
                    //img: '/img/logos/html.png',
                    url: 'https://nodejs.org/en/',
                },
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
            })
            .style("stroke-width", '1')
            .style("stroke", (d) => d.data.strokeColor || '');


        //Append Titles of circle
        node.append("text")
            .attr("dy", ".2em")
            .style("text-anchor", "middle")
            .text((d) => d.data.text && d.data.text.substring(0, d.r / 3))
            .attr("font-family", "sans-serif")
            .attr("font-size", (d) => {
                return d.r / 4;
            })
            .attr("transform", "translate(0, -20)")
            .attr("fill", "white");

        //Append Image
        const imageWidth = 50;
        const imageHeight = 50;
        node.append("image")
            .attr("xlink:href",(d) => d.data.img )
            .attr("width", `${imageWidth}px`)
            .attr("height", `${imageHeight}px`)
            .attr("transform", (d) => {
                if (d.data.text) {
                    return `translate(-${imageWidth/2}, -${imageHeight/8})`;
                } else {
                    return `translate(-${imageWidth/2}, -${imageHeight/2})`;
                }
            });

    }


}