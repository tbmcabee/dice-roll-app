# DnD 5e Applications

## Current Applications Implemented:
### DnD 5e Dice Roller app
* A user can roll a varity of dice (D4, D6, D8, D10, D12, D20) against user specified DC (Dice Checks) or roll for damage with the same set of dice options.
* When rolling against a DC, the user can add individual dice and set individual modifiers to each roll based on their character's stats. When a DC is meet or exceeded, the individual dice will change to a green color signifying success and a red dignifying a failure. 
* When rolling damnage rolls, the user can set a overall damage modifer along with the choice of setting "Crunchy Crits", which will maximize the damage of the first dice rolled. 
### DnD 5e API request app
* Within this example, I am pulling from the "races" endpoint from the Open5e API service to pull specific category information for each avaiable character race in DnD 5e.
* These categories include: "Name", "Ability Score Increase", "Speed", "Age", "Alignment", "Size", and"Languages"
* Once a back-end is implemented, the API requests for this will move there as well. However, since these are public endpoints, utilizing no tokens, they are being ran in the front-end for now.
* When one of the API JSON response keys does not have a value for one of the categories, it is given the "N/A" generic value. 

#### Notable Libraries/Frameworks:
* Vite Tooling
* React.js
* React Router Dom
* TailwindCSS
* Bootstrap
* Fetch

#### Planned Implementations:
* Character Creation Application
* Django Backend app for API requests and SQLite3 database
* Github Actions YAML pipeline for security scanning and app testing
