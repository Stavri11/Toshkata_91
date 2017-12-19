function solve(lines){ // когато се подава един елемент това е винаги масив
var valley = lines[0].split(',').map(Number);

//var pattern = [1, 2, -3];

function isOutside(valley, index){ // dali sme navyn, ako e undefined shte vyrne true
	return valley[index]===undefined; //raboti samo za "valley" dobre samo za tekushtata zadacha
										// zashtoto mojesh da imash undefined v masiv
}

function coinsForPattern(valley, pattern){ //сега започваме от 0 и събираме монетките по пътя
										// по-добре while cycle защото не знаем колко пъти ще го въртим
		var visited = [],		//къде съм ходил		// в нулев масив отбелязваме къде сме били, много пъти ще въртим цикъла да не мажем
		coins=0,				//колко монети съм събрал
		index=0,							// тук пазим позицията
		patternIndex = 0;						//индекса на числото вътре в патерна върху което съм и.е. 1, 2 или -3 това 
											//и по-горе ми трябва за да се движа в този масив
											
			//stop when outside or visited, continue when inside and not visited
		while(!visited[index] && !isOutside(valley,index)){	//stop when outside of visited ako oshte ne sym bil v masiva
			visited[index]=true;	//pravim kakvoto pravim i posle otbeliazvame che sme bili
			
			coins += valley[index]  //sybirame monetki
			
			index += pattern[patternIndex]	//update-vame si index-a s broja skokcheta ot patternIndex-a

			patternIndex += 1;  	      //i minavame kym sledvashtata kletka v patternIndexa i.e. [1, 2, -3]
			patternIndex %= pattern.length; // celochislenoto delenie vinagi shte dava ostatyk 0 dokato sme oshte v masiva 
											//i se vryshtame v nachaloto ako sme stignali 10 i dyljinata e 6 shte dava 4
		}
		return coins;					 // napishi kakvo shte vryshta oshte sega za da ne se chudish posle
}
	
	var results = [];
	
	for(var i=2; i < lines.length; i+=1) {
		//console.log(lines[i]);
		var pattern = lines[i]
							.split(',')
							.map(Number)
				
				results.push(coinsForPattern(valley,pattern))
				console.log(results);
	}
	
	var maxCoins = Math.max.apply(null,results);
	return maxCoins;
}

var test1 = [
    '1, 3, -6, 7, 4 ,1, 12',
	'3',
    '1, 2, -3',
    '1, 3, -2',
    '1, -1',
];

var test2 = [
'2, -4, -6, 10, 2, 1, 5',
'3',
'3, 2, -1',
'2, 2, -4',
'2, -3'
]

solve(test1);

