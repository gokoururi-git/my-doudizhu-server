/**
 * 仅考虑值的对比，不考虑值的顺序，值浅比较
 * @param base 任意数组
 * @param compartor 任意数组
 */
export const isSameValueArray = (base: unknown[], compartor: unknown[]): boolean => {
    if (base.length !== compartor.length) {
        return false;
    }
    const commonLenght = base.length;
    const matchedIndexInBaseArray = Array.from<boolean>({ length: commonLenght }).fill(false);
    for (let compartorArrIndex = 0; compartorArrIndex < commonLenght; compartorArrIndex++) {
        let hasCurrentCompartorValueMatched = false;
        for (let baseArrIndex = 0; baseArrIndex < commonLenght; baseArrIndex++) {
            if (matchedIndexInBaseArray[baseArrIndex]) {
                continue;
            }
            if (base[baseArrIndex] === compartor[compartorArrIndex]) {
                matchedIndexInBaseArray[baseArrIndex] = true;
                hasCurrentCompartorValueMatched = true;
                break;
            }
        }
        if (!hasCurrentCompartorValueMatched) {
            return false;
        }
    }
    return true;
}

export const isIncreaseArray = (toBeTestArray: number[]) => {
    if (toBeTestArray.length <= 1) {
        return true;
    }
    let last = toBeTestArray[0];
    for (let i = 1; i < toBeTestArray.length; i++) {
        if(toBeTestArray[i] !== last + 1) {
            return false;
        }
        last = toBeTestArray[i];
    }
    return true;
}

export const isDecreaseArray = (toBeTestArray: number[]) => {
    if (toBeTestArray.length <= 1) {
        return true;
    }
    let last = toBeTestArray[0];
    for (let i = 1; i < toBeTestArray.length; i++) {
        if(toBeTestArray[i] !== last - 1) {
            return false;
        }
        last = toBeTestArray[i];
    }
    return true;
}
