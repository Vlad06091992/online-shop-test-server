export const HTTP_STATUSES = {
    OK_200: 200,
    CREATED_201: 201,
    NO_CONTENT_204: 204,

    BAD_REQUEST_400: 400,
    NOT_FOUND_404: 404,
}

 type HTTPStatusKeys = keyof typeof HTTP_STATUSES
export type HTTPStatusType = (typeof HTTP_STATUSES)[HTTPStatusKeys]