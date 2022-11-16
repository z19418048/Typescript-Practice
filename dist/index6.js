"use strict";
// /users GET   {paging:Paging, data:User[]}
// /products GET {paging:Paging, data:Product[]}
let userResult = {
    paging: {
        page: 1,
        size: 10,
        total: 2
    },
    data: [{ name: '子龍', id: 1 }]
};
function fetch(url) {
    return {
        paging: {
            page: 1,
            size: 10,
            total: 2
        },
        data: []
    };
}
//# sourceMappingURL=index6.js.map