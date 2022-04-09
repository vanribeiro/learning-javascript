const people = [
	{
		name: "Victoria",
		favorites: {
			movies: null,
		},
	},
	{
		name: "Marcos",
		favorites: {
			movies: [
                "Shrek", 
                "A garota no trem", 
                "Dilema das redes"
            ],
		},
	},
];

// ES2019
const noOptioanlChainning = people.map((person) => {
	return (
        person.favorites.movies === null 
        || person.favorites.movies === undefined
		? "Não especificado"
		: person.favorites.movies
    );
});

console.log(noOptioanlChainning);

// ES2020
const withOptioanlChainning = people.map((person) => {
	return (
        !person.favorites?.movies 
        ? "Não especificado"
		: person.favorites.movies
    );
});

console.log(withOptioanlChainning);