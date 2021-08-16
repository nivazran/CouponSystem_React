import CouponModel from "../Models/CouponModel";

// Step 1 - Create AppState and manage the collection once and in a centralize place
export class CouponsAppState {
    public coupons: CouponModel[] = [];
}

// Step 2 - Define ActionType using enum for all required operations
export enum CouponsActionType {
    CouponsDownloaded = "CouponsDownloaded",
    CouponAdded = "CouponAdded",
    CouponUpdated = "CouponUpdated",
    CouponDeleted = "CouponDeleted"
}

// Step 3 - Define Action Interface to describe actionAction & payload if needed
export interface CouponAction {
    type: CouponsActionType;
    payload?: any;
}

// Step 4 - Export Action Creators functions that gets payload and return relevant Action
export function couponsDownloadedAction(coupons: CouponModel[]): CouponAction {
    return { type: CouponsActionType.CouponsDownloaded, payload: coupons };
}

export function couponAddedAction(cat: CouponModel): CouponAction {
    return { type: CouponsActionType.CouponAdded, payload: cat };
}

export function couponUpdatedAction(cat: CouponModel): CouponAction {
    return { type: CouponsActionType.CouponUpdated, payload: cat };
}

export function couponDeletedAction(id:number): CouponAction {
    return { type: CouponsActionType.CouponDeleted, payload: id };
}

// Step 5 - Reducer function perform the required action
export function couponsReducer(currentState: CouponsAppState = new CouponsAppState(),action:CouponAction): CouponsAppState{

    const newState = {...currentState} //Spread Operator
    switch(action.type){
        case CouponsActionType.CouponsDownloaded:
            newState.coupons = action.payload;
            break;
        case CouponsActionType.CouponAdded:
            newState.coupons.push(action.payload);
            break;
        case CouponsActionType.CouponUpdated:
            //  const idx = newState.cats.filter(c => c.id === action.payload.id);
            //  newState.cats[idx]=action.payload;    
            break
        case CouponsActionType.CouponDeleted:
            newState.coupons = newState.coupons.filter(c=>c.id !== action.payload);
            break
    }
    return newState;
}