import { IProfile } from "../../models/IProfile";

export class ProfileLogica{
    private profile: IProfile;

    constructor(_profileData: IProfile) {
        this.profile = _profileData;
    }
    
    public getUserName() : string{
        return this.profile.name;
    }
}