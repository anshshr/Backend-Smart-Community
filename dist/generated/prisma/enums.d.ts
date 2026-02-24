export declare const UserVisibility: {
    readonly PUBLIC: "PUBLIC";
    readonly AFTER_REQUEST: "AFTER_REQUEST";
    readonly AFTER_ACCEPT: "AFTER_ACCEPT";
};
export type UserVisibility = (typeof UserVisibility)[keyof typeof UserVisibility];
export declare const ProductStatus: {
    readonly AVAILABLE: "AVAILABLE";
    readonly REQUESTED: "REQUESTED";
    readonly SOLD: "SOLD";
};
export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus];
export declare const RequestStatus: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly REJECTED: "REJECTED";
};
export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly FAILED: "FAILED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
//# sourceMappingURL=enums.d.ts.map