export interface AccessToken {
    access_token: string,
    expires_in: Date|number,
    scope: string,
    refresh_token?: string,
    forWho?: string
}

export interface RefreshToken {
    refresh_token: string,
    scope: string,
    forWho?: string
}