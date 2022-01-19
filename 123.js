let test = (...params)=>{
    return params[0]+ (params[1] || 3)
}

let res = test(2,10)
console.log(res);