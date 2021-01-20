import { BaseLoginProvider } from '../entities/base-login-provider';
import { SocialUser } from '../entities/user';
export declare class AppleLoginProvider extends BaseLoginProvider {
    private clientId;
    private scope;
    private redirectURI;
    private state;
    static readonly PROVIDER_ID: string;
    protected auth2: any;
    constructor(clientId: string, scope: string, redirectURI: string, state: string);
    initialize(): Promise<void>;
    signIn(signInOptions?: any): Promise<SocialUser>;
    getLoginStatus(): Promise<SocialUser>;
    signOut(revoke?: boolean): Promise<any>;
}
