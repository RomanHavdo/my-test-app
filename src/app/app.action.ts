import { Action } from '@ngrx/store'

export namespace APP_ACTION{
    export const GET_USERS= 'GET_USERS'
}

export class GetUsers implements Action{
    readonly type = APP_ACTION.GET_USERS
}
//Commit 10