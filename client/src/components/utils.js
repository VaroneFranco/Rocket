
function ordenar(array,key){
    if(key === "a-z") return array.sort((a,b)=> (a.name.toLowerCase() > b.name.toLowerCase()) ? 1:-1)
    if(key === "z-a") return array.sort((a,b)=> (a.name.toLowerCase() < b.name.toLowerCase()) ? 1:-1)
    if(key === "higher-rockets") return array.sort((a,b)=> (a.score < b.score) ? 1:-1)
    if(key === "higher-reports") return array.sort((a,b)=> (a.reports < b.reports) ? 1:-1)
}

module.exports = {
    ordenar
}