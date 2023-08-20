export const updateObjectInArray = (items: Array<any>, itemId: number, objPropName: string, newObjProps: object) => {
    return items.map((el) => {
        if (el[objPropName] === itemId) {
            return { ...el, ...newObjProps }
        }
        return el
    })
}
