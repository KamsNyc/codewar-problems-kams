var languageDatabase = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
};

// Welcome function
function greet(language) {
  // Check if language exists in the database
  if (language in languageDatabase) {
    return languageDatabase[language];
  } else {
    // Default to English if the language is not in the database or invalid input
    return languageDatabase['english'];
  }
}

console.log(greet(english))
console.log(greet(german))
console.log(greet(swedish))