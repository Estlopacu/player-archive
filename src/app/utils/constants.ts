export class Constants {
    private static readonly API_URL = `http://localhost:3000/player/`;

    public static getPlayerURL = function(profileId: string = '') {
        return `${this.API_URL}${profileId}`;
    };
}
