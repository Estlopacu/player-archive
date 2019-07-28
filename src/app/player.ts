export interface PlayerBasic {
    id: string;
    active: string;
    profile: string;
}

export interface PlayerInfo {
    id: string;
    profile: {
        age: string;
        role: string;
        team: string;
        picture: string;
    };
    stats: any;
}