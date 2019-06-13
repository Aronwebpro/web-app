/// <reference path="./infusionsoft.d.ts" />
/// <reference path="./ptfm.d.ts" />
/// <reference path="./tokens.d.ts" />

declare interface User {
    _id: string
    email: string
    firstName: string
    lastName: string
    profilePictures: string[]
}

declare interface ResponsiveTableColumn {
    title: string
    dataIndex: string
    key: string
    textAlign? : string
    render?: (cellData: any, row: { [key:string] : string }) => JSX.Element
}

declare interface ProspectiveDataItemType {
    text: string
    img: string
    url: string
    translatePosition?: string
}

type PortfolioProjectsDate = {
    title: string
    date: string
    img: string
    type?: string
    appType?: string
    appTypeColor?: {
        [key: string]: string
    }
    url?: string
    description?: string
    render: () => JSX.Element
}

declare interface PortfolioProjectsItem {
    title: string
    data: PortfolioProjectsDate[]

}