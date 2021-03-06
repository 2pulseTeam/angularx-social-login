import { BaseLoginProvider } from '../entities/base-login-provider';
import { SocialUser } from '../entities/user';
import { LoginOpt } from '../auth.service';
export declare class GoogleLoginProvider extends BaseLoginProvider {
    private clientId;
    _platformId: Object;
    private opt;
    static readonly PROVIDER_ID: string;
    protected auth2: any;
    constructor(clientId: string, _platformId: Object, opt?: LoginOpt);
    initialize(): Promise<void>;
    getLoginStatus(): Promise<SocialUser>;
    signIn(opt?: LoginOpt): Promise<SocialUser>;
    signOut(revoke?: boolean): Promise<any>;
}
