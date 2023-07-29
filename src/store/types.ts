export interface ITokensRes {
    token_type: string,
  access_token: string,
  expires_in: number,
  refresh_token: string,
  scope: string
}

export interface IUploadQuery {
    href: string,
    method: string,
    templated: boolean
}