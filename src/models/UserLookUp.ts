import {UserStatus} from "../api/GetServerData";

/** User dto for collections */
export interface UserLookUp {
    id: string;
    /** Non-unique user name */
    displayName: string;
    /** Avatar url */
    avatar?: string | undefined
    textStatus?: string | undefined;
    status?: UserStatus
}