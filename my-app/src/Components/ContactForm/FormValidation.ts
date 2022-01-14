export const isEmpty = (value: string) => {
    return value === "" ? true : false
}


export const formClass = (valid: boolean, errorClass: string ) => {
    if (!valid) {
        return  errorClass
    } else {
        return ""
    }
}