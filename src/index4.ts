class KeyValueStorage<K,V> {
    constructor(public key: K, public value: V){
    }
}
let storage = new KeyValueStorage<number, {name: string, role: string}>(1, {name: '子龍', role: 'admin'})
