export class User{
 /*  static token(arg0: string, token: any): import("@angular/common/http").HttpParams | { [param: string]: string | number | boolean | readonly (string | number | boolean)[]; } | undefined {
    throw new Error("Method not implemented.");
  } */
    constructor(
        public email: string,
        public id: string,
        private _token: string,
        private _tokenExpirationDate: Date){}

        get token(){
            if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
                return null;
            }
            return this._token;
        }
}