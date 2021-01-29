export function findById(id, array){ //new way Dani showed us to find ID
    return array.find(item => item.id === id);
}