export class Constants {
    private static readonly API_PLAYER_URL = `https://web-sandbox.onefootball.com/assignments/player/data/`;
    private static readonly API_PLAYER_INFO_URL = `https://web-sandbox.onefootball.com/assignments/player/profile/`;

    public static getPlayerURL = function(profileId: string = '') {
        return `${this.API_PLAYER_URL}${profileId}.json`;
    };

    public static getPlayerInfoURL = function(profileId: string = '') {
        return `${this.API_PLAYER_INFO_URL}${profileId}`;
    };
}
