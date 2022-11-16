function wrapInArray<T>(value: T){
    return [value]
}

let number = wrapInArray(true)



class ArrayUtils {
    static wrapInArray<T>(value:T){
        return [value]
    }
}

ArrayUtils.wrapInArray(2)