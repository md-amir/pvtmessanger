export class  User {
    public id: number;
    public email: string;
    public username: string
    public mobile: string;
    public image: string;
    public club_name: string;
    public referral_key: string;
    public referring_point: number;
    public fb_id: string;
    public fb_name: string;
    public nick_name: string;
}

export class LoginResponse {
    public token: string;
    public user: User;
    public success: boolean;
    public message: string;
}

export class Product {
  public id: number;
  public name: string;
  public price: string;
  public large_image: string;
  public small_image: string;
  public status: boolean;
}