let name ="evance";
let language = "JavaScript";
function introduction(name) {
    return "Hi, my name is ${name}";
}

function introductionWithLanguage (name,language) {
    return "Hi, my name is ${name} amd I am learning to program in ${language}"
}
function introductionWithLanguage (name,language = "JavaScript") {
    return "Hi, my name is ${name} amd I am learning to program in ${language}"
}