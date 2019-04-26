import { SessionsByName } from "imports/api/services/ptfm";

export as namespace ISoft;

export = ISoft;

declare namespace ISoft {
    export interface Contact {
        id: number,
        _PTFMid: number,
        _Stripeid: string,
        _QBEid: string,
        _AutopayEnabled: boolean
        FirstName: string,
        LastName: string
    }
    
    export interface SessionsWithContact extends SessionsByName {
        _Stripeid?: string,
        _QBEid?: string,
        _AutopayEnabled?: boolean
    }
    
    export interface SessionInfo {
        key: string,
        code: string,
        status: string,
        date: string | Date,
        system: string,
        quantity: number
    }
    
    export interface SessionsAsTableRows {
        key: number,
        name: string,
        itemsReady: string,
        numSessionsReady: number,
        totalSessions: number,
        showWarning: boolean,
        autoPay: string,
        expandCollapse: string,
        expanded: SessionInfo[]
    }
}
