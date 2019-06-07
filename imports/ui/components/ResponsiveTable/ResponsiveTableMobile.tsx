import * as React from 'react';

// Utils
import { getObjectPropertyByStringRegex } from 'imports/lib/utils';

// Columns
import Accordion from '../Accordion';
import { ResponsiveTableColumn } from './ResponsiveTableTypes';

//@types
interface Props {
    data: any[]//TODO: Make generic
    columns: ResponsiveTableColumn[]
}

export default class ResponsiveTableMobile extends React.PureComponent<Props, {}> {
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
                title={<div>{headerColumns.map<JSX.Element>(column => this.renderColumn(column, row))}</div>}
                expandOnRender={!index}
            >
                {hiddenColumns.map<JSX.Element>((column) => this.renderColumn(column, row))}
            </Accordion>
        ));
    }

    // Render Table Columns
    renderColumn = ({ dataIndex, key, render, renderOnMobile, textAlign }: ResponsiveTableColumn, row: any ) => {
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

    // Partition Columns into two groups by key, who has it and not
    partitionColumns = (columns: ResponsiveTableColumn[], key: string): [ResponsiveTableColumn[], ResponsiveTableColumn[]] => {
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