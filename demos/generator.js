var physicalTraits = ["male", "female", "tall", "short", "ugly", "beautiful", "strong", "weak"]
var races = ["human", "elf", "orc", "dwarf"]
var professions = ["knight", "wizard", "healer"]

var Generate = function () {
    var d1 = physicalTraits[Math.floor(Math.random() * physicalTraits.length)];
    var d2 = races[Math.floor(Math.random() * races.length)];
    var d3 = professions[Math.floor(Math.random() * professions.length)];
                                    
    //var text = document.getElementById("fname").value;
    alert("A " + d1 + " " + d2 + " " + d3);
}
