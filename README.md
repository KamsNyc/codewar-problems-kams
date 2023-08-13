# Codewar Problem & Solutions

## Person Class

```javascript
class Person {
  constructor(name, codename, role, location) {
    this.name = name;
    this.codename = codename;
    this.role = role;
    this.location = location;
  }

  displayCommitment(challengesPerDay) {
    console.log(`FirstName: ${this.name}`);
    console.log(`CodeName: ${this.codename}`);
    console.log(`Role: ${this.role}`);
    console.log(`Location: ${this.location}`);
    console.log(`Commitment: I will be doing no less than ${challengesPerDay} CodeWars challenge(s) per day.`);
    console.log(`-------------------------`);
  }
}

const kamel = new Person("Kamel", "KamsNyc", "Full Stack Developer", "Queens, NYC");
const challengesPerDay = 1;

kamel.displayCommitment(challengesPerDay);
```

#Result
```
FirstName: Kamel
CodeName: KamsNyc
Role: Full Stack Developer
Location: Queens, NYC
Commitment: I will be doing more than 1 CodeWars challenge(s) per day.

```
Date: 08/13/2023
