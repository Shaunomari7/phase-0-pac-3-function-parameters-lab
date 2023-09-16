function introduction(name) {
    console.log(`Hi my name is ${name}`)
}
introduction("John");

function introductionWithLanguage(name, language) {
    console.log(`Hi my name is ${name} and I am learning to program in ${language}`)
}
introductionWithLanguage("john", "python");

function introductionWithLanguageOptional(name, language="JavaScript") {
    console.log(`Hi my name is ${name} and I am learning to program in ${language}`)
}
introductionWithLanguageOptional("Johna");