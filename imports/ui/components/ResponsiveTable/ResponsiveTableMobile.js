import React from 'react';
import Accordion from '../Accordion';
import { getObjectPropertyByStringRegex } from '../../../lib/utils';


export default class ResponsiveTableMobile extends React.PureComponent {
    render() {
        const {
            data,
            columns,
        } = this.props;

        const [headerColumns, hiddenColumns] = this.partitionColumns(columns, 'showAsMobileTableHeader');
        if (headerColumns.length === 0) {
            headerColumns.push(columns[0]);
            hiddenColumns.shift();
        }
        return data.map((row, index) => (
            <Accordion
                key={index.toString()}
                title={<div>{headerColumns.map(column => this.renderColumn(column, row))}</div>}
                expandOnRender={!index}
            >
                {hiddenColumns.map((column) => this.renderColumn(column, row))}
            </Accordion>
        ));
    }


    renderColumn = ({ dataIndex, key, render, renderOnMobile, textAlign }, row) => {
        return (
            <div {...{ key }} className={`cell ${textAlign || ''} ${row.customClass || ''}`}>
                {
                    render ?
                        (renderOnMobile ?
                            renderOnMobile(getObjectPropertyByStringRegex(row, dataIndex)) :
                            render(getObjectPropertyByStringRegex(row, dataIndex))
                        ) :
                        getObjectPropertyByStringRegex(row, dataIndex)
                }
            </div>
        );
    };

    partitionColumns = (columns, key) => {
        const columns1 = [];
        const columns2 = [];
        for (let i = 0; i < columns.length; i++) {
            if (columns[i][key]) {
                columns1.push(columns[i]);
            } else {
                columns2.push(columns[i]);
            }
        }
        return [columns1, columns2];
    };
}