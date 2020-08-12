# uule-generator
A package for generating google's UULE query parameter used for simulating/mocking locations in search results. Google's search results are highly location based. Adding this parameter to a google search query gives localised results and the ability to get search results for different locations. **uule-generator** generates a UULE based on either the name or canonical name for the given location.  

## Installation

```
npm i uule-generate
```

##Usage 

```
import generate from 'uule-generate'

// generates the uule from the location name
const uule = generate.generateFromName('Lagos')
```

You can also use the location's canonical name for places with complex or easily confused, mispelled, etc names

```
const uule = generate.generateFromCanonicalName('Vicente Lopez,Buenos Aires Province,Argentina')

```
