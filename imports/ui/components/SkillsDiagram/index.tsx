import * as React from 'react';
import * as d3 from 'd3';

//Constants
import { dataSet } from 'imports/lib/constants/skillsDiagram';

//Styles
import './skills-diagram.css';

class SkillsDiagram extends React.Component<{}, {}> {
    render() {
        return (
            <div className='skills-diagram-container'>
                <div className='skills-diagram-canvas'/>
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('resize', this.drawChart);
        this.drawChart();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.drawChart);
    }

    drawChart = (): void => {
        //Canvas diameter
        const diameter = window.innerWidth > 1000 ?
            600 :
            (
                window.innerWidth > 500 ?
                    window.innerWidth * 0.6 :
                    window.innerWidth * 0.8
            );

        //Append Image
        const imageSize = diameter / 12;

        //Remove Old Image
        const oldSvg = d3.select('.skills-diagram-canvas').select('svg');
        if (oldSvg) {
            oldSvg.remove();
        }

        //Draw SVG canvas
        const svg = d3.select('.skills-diagram-canvas')
            .append('svg')
            .attr('width', diameter)
            .attr('height', diameter + 20)
            .attr('class', 'bubble');

        const nodes = d3.hierarchy(dataSet)
            .sum(function (d) {
                return d.size;
            });

        const bubble = d3.pack(dataSet)
            .size([diameter, diameter])
            .padding(1.5);

        //Tooltip Container
        const tooltip = d3.select('.skills-diagram-container').append('div')
            .attr('class', 'tooltip')
            .style('color', 'white')
            .style('background-color', '#626D71')
            .style('border-radius', '6px')
            .style('text-align', 'center')
            .style('font-family', 'monospace')
            .style('width', '200px')
            .style('height', 'auto')
            .style('opacity', 0);

        //Create Buble Node
        const node = svg.selectAll('.node')
            .data(bubble(nodes).descendants())
            .enter()
            .filter((d) => {
                return !d.children;
            })
            .append('g')
            .attr('class', 'node')
            .attr('transform', (d) => {
                return 'translate(' + d.x + ',' + d.y + ')';
            })
            .style('cursor', 'pointer')
            .on('mouseover', function (selection) {
                d3.selectAll(this.childNodes).each(function () {
                    d3.select(this)
                        .transition()
                        .duration(1000)
                        .ease(d3.easeBounce)
                        .style('opacity', 0.7)
                        .style('z-index', 100)
                        .attr('transform', function (d) {
                            //Circle Position
                            if (this.tagName === 'circle') {
                                return `scale(1.2) ${d.data.img ? `scale(1.2) translate(0, ${imageSize / 4})` : 'scale(1.2) translate(0, 0)'}`;
                                //Text Position
                            } else if (this.tagName === 'text') {
                                return d.data.img ? `scale(1.2) translate(0, ${imageSize / 1.3})` : 'scale(1.2) translate(0, 0)';
                                //Image Position
                            } else if (this.tagName === 'image') {
                                if (d.data.text) {
                                    return `scale(1.2) translate(-${(imageSize + 20) / 2}, -${imageSize})`;
                                } else {
                                    return `scale(1.2) translate(-${(imageSize + 20) / 2}, -${20})`;
                                }
                            }
                        })
                        .attr('width', function (d) {
                            if (this.tagName === 'image') {
                                return `${imageSize + 20}px`;
                            }
                        })
                        .attr('height', (d) => {
                            if (this.tagName === 'image') {
                                return `${imageSize + 20}px`;
                            }
                        });
                });

                if (window.innerWidth > 769) {
                    //Make tooltip visible
                    tooltip.transition()
                        .duration(200)
                        .style('opacity', .9);
                    tooltip.html(`<h2>${selection.data.tooltip || ''}</h2>`)
                        .style('left', (d3.event.pageX + selection.r) + 'px')
                        .style('top', (d3.event.pageY - 28) + 'px');
                }
            })
            .on('mouseout', function () {
                d3.selectAll(this.childNodes).each(function () {
                    d3.select(this)
                        .transition()
                        .duration(1000)
                        .ease(d3.easeBounce)
                        .style('opacity', 1)
                        .attr('transform', function (d) {
                            if (this.tagName === 'circle') {
                                return `scale(1)`;
                            } else if (this.tagName === 'text') {
                                return d.data.img ? 'translate(0, 20)' : 'translate(0, 0)';
                            } else if (this.tagName === 'image') {
                                if (d.data.text) {
                                    return `translate(-${imageSize / 2}, -${imageSize})`;
                                } else {
                                    return `translate(-${imageSize / 2}, -${imageSize / 2})`;
                                }
                            }
                        })
                        .attr('width', function (d) {
                            if (this.tagName === 'image') {
                                return `${imageSize}px`;
                            }
                        })
                        .attr('height', (d) => {
                            if (this.tagName === 'image') {
                                return `${imageSize}px`;
                            }
                        });
                });
                //Hide ToolTip
                tooltip.transition()
                    .duration(500)
                    .style('opacity', 0);
            })
            .on('click', function (d) {
                const link = window.open(d.data.url, '_blank');
                link.focus();
            });

        //Append Circle Graphics to Node
        node.append('circle')
            .attr('r', (d) => {
                return d.r - 2;
            })
            .style('fill', (d, i) => {
                return d.data.color;
            })
            .style('stroke-width', '1')
            .style('stroke', (d) => d.data.strokeColor || '');

        //Tech Logo
        node.append('image')
            .attr('xlink:href', (d) => d.data.img)
            .attr('width', `${imageSize}px`)
            .attr('height', `${imageSize}px`)
            .attr('transform', (d) => {
                if (d.data.text) {
                    return `translate(-${imageSize / 2}, -${imageSize})`;
                } else {
                    return `translate(-${imageSize / 2}, -${imageSize / 2})`;
                }
            });

        //Title
        node.append('text')
            .attr('dy', '.2em')
            .style('text-anchor', 'middle')
            .text((d) => d.data.text && d.data.text.substring(0, d.r / 3))
            .attr('font-family', 'sans-serif')
            .attr('font-size', (d) => {
                return d.r / 3.5;
            })
            .attr('transform', (d) => d.data.img ? `translate(0, ${imageSize / 2})` : 'translate(0, 0)')
            .attr('fill', (d) => d.data.textColor || 'white');
    };
}

export default SkillsDiagram;