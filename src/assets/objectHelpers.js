export const updateObjectinArray = (items, itemsId, objPropName, newObjProps) => {
    return items.map(user => {
        if (user[objPropName] === itemsId) {
            return {...user, ...newObjProps}
        }
        return user
    })
}