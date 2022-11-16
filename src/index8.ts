type Product = {
    name: string;
    price: number;
}

class Store<T> {
    protected objects: T[] = []

    add(obj: T){
        this.objects.push(obj)
    }
}

// 传入泛型类型参数
class CompressibleStore<T> extends Store<T> {
    compress() {}
}
// 重新约束泛型参数
class SearchableStore<T extends {name:string}> extends Store<T> {
    find(name: string): T|undefined {
        return this.objects.find(item => item.name === name)
    }
}

//结束泛型参数
class ProductStore extends Store<Product> {
    
}