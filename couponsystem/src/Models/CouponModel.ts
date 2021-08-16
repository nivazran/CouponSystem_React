class CouponModel {
    public id?:number;
    public category?:string;
    public title?: string;
    public description? : string;
    public startdate? : Date;
    public enddate? : Date;
    public amount? : number;
    public price? : number;
    public image? : string;
}

export default CouponModel;