let project = {"code":"CUB", "name":"e-passbook", "manager":"Forrest Gump"}
let manager = {"teamLead":"ram"}
let location = {}

let clone = Object.assign(project, manager);

console.log(clone);