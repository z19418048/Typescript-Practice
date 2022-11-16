// /users GET   {paging:Paging, data:User[]}
// /products GET {paging:Paging, data:Product[]}


interface PageResult<T> {
    paging: Paging
    data: T[]
}

type Paging = {
    page: number;
    size: number;
    total: number;
}

type User = {
    name: string;
    id: number
}

let userResult: PageResult<User> = {
    paging: {
        page: 1,
        size: 10,
        total: 2
    },
    data: [{name: '子龍', id: 1}]
}

function fetch<T> (url: string) : PageResult<T>{
    return {
        paging: {
            page: 1,
            size: 10,
            total: 2
        },
        data: []
    }
}