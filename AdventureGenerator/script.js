let adventure = {
    locations : ["Enchangted Forest", "Abandoned Castle", "Mysterious Cave", "Haunted Village", "Ancient Ruins", "Hidden Temple", "Dark Swamp", "Forgotten Island", "Cursed Tower", "Secret Garden"],
    actions : ["explore", "investigate", "search for treasure", "fight monsters", "solve puzzles", "rescue a captive", "uncover secrets", "defeat a villain", "find a hidden passage", "escape from danger"],
    characters : ["a brave knight", "a cunning thief", "a wise wizard", "a fierce warrior", "a mysterious stranger", "a loyal companion", "a powerful sorcerer", "a skilled archer", "a fearless adventurer", "a clever rogue"],
    generateAdventure: function() {
        let location = this.locations[Math.floor(Math.random() * this.locations.length)];
        let action = this.actions[Math.floor(Math.random() * this.actions.length)];
        let character = this.characters[Math.floor(Math.random() * this.characters.length)];
        console.log(`You will ${action} in the ${location} with ${character}!`); // The $ character is used for string interpolation, allowing us to insert variables directly into the string.
    },
    addAdventureOption : function(array, newOption) {
        array.push(newOption);
        console.log(`New option added: ${newOption}`);
    }
};

let choice = prompt("Welcome to the Adventure Generator! Would you like to add a new location, action, or character? (Type 'location', 'action', or 'character')");
if (choice.toUpperCase() === "LOCATION") {
    let newLocation = prompt("Enter the new location:");
    adventure.addAdventureOption(adventure.locations, newLocation);
} else if (choice.toUpperCase() === "ACTION") {
    let newAction = prompt("Enter the new action:");
    adventure.addAdventureOption(adventure.actions, newAction);
} else if (choice.toUpperCase() === "CHARACTER") {
    let newCharacter = prompt("Enter the new character:");
    adventure.addAdventureOption(adventure.characters, newCharacter);
} else {
    console.log("Invalid choice. Please type 'location', 'action', or 'character'.");
}

adventure.generateAdventure();