import React from 'react';
import PropTypes from 'prop-types';

//Utils
import { getObjectPropertyByStringRegex } from '/imports/lib/utils';

//Styles
import './responsiveTable.css';

export default class ResponsiveTableDesktop extends React.PureComponent {
    static propTypes = {
        columns: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            dataIndex: PropTypes.string.isRequired,
            key: PropTypes.string,
            render: PropTypes.func,
            textAlign: PropTypes.string,
        })).isRequired,
        data: PropTypes.arrayOf(PropTypes.object),
        bordered: PropTypes.bool,
    };

    static defaultProps = {
        data: [],
        bordered: true,
    };

    render() {
        const {
            bordered,
            columns,
            data,
        } = this.props;
        return (
            <div className='res-table-container'>
                <table className={`res-table ${bordered && 'res-table-bordered'}`}>
                    <thead>
                        <tr>
                            {columns.map(({ title }, index) => {
                                return (
                                    <th key={index.toString()}>
                                        {title}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 && data.map((row, index) => {
                            return (
                                <tr key={index.toString()}>
                                    {columns.map(({ dataIndex, key, render, textAlign }) => {
                                        return (
                                            <td {...{ key }} className={`${textAlign || 'center'} ${row.customClass || ''}`}>
                                                {
                                                    render ?
                                                        render(getObjectPropertyByStringRegex(row, dataIndex)) :
                                                        getObjectPropertyByStringRegex(row, dataIndex)
                                                }
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}