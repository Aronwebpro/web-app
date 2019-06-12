export interface ResponsiveTableColumn {
    title: string
    dataIndex: string
    key: string
    textAlign?: string,
    bordered?: boolean
    render?: (row: any) => JSX.Element //Make this be generic
    renderOnMobile?: (element: any) => JSX.Element //Make this be generic
    showAsMobileTableHeader?: boolean
}
