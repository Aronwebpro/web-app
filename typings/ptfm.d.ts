export as namespace PTFM;

export = PTFM;

declare namespace PTFM {
    export interface Session {
        session_id: number,
        client_id: number,
        client_name: string,
        group_coaching_session_id?: number,
        session_date: Date|string,
        session_status: number,
        invoice_id?: number 
    }

    export interface Client {
        id: number,
        first_name: string,
        last_name: string,
        birthdate: Date|string,
        gender: string,
        bill_to_id: number,
        address_1: string,
        address_2?: string,
        locality: string,
        region: string,
        postal_code: string,
        email: string,
        phone: string,
        quickbook_id?: number
    }
}