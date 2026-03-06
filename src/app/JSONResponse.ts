type BaseResponse = {
    success: boolean;
    message: string;
    [key: string]: unknown;
};

export type JSONResponse<T = undefined> =
    T extends undefined
    ? BaseResponse
    : BaseResponse & (
        | { item: T; items?: never }
        | { items: T[]; item?: never }
    );