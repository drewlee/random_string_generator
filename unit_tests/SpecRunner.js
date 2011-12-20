describe('testing character definitions', function(){
	
	it('chars is defined', function(){
		expect(typeof chars != 'undefined').toBeTruthy();
	});
	
	it('"num" outputs the expected array', function(){
		expect(chars.num).toEqual(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
	});
	
	it('"alphalc" outputs the expected array', function(){
		expect(chars.alphalc)
			.toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
	});
	
	it('"alphauc" outputs the expected array', function(){
		expect(chars.alphauc)
			.toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
	});
	
	it('"alpha" outputs the expected array', function(){
		expect(chars.alpha)
			.toEqual([
				'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A',
				'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
			]);
	});
	
	it('"alphanum" outputs the expected array', function(){
		expect(chars.alphanum)
			.toEqual([
				'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A',
				'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1',
				'2', '3', '4', '5', '6', '7', '8', '9'
			]);
	});
	
	it('"special" outputs the expected array', function(){
		expect(chars.special).toEqual([
			'!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '`', '~', '[', ']', '{', '}', '\\', '|', ';', ':', '\'', '"', '<', '>',
			'.', ',', '/', '?'
		]);
	});
	
	it('"all" outputs the expected array', function(){
		expect(chars.all)
			.toEqual([
				'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A',
				'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1',
				'2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '`', '~', '[', ']', '{',
				'}', '\\', '|', ';', ':', '\'', '"', '<', '>', '.', ',', '/', '?'
			]);
	});
	
});


describe('testing generateRandomString function', function(){
	
	it('should output a value even with no arguments', function(){
		expect(generateRandomString()).not.toEqual('');
	});
	
	it('should not output a string longer than the specified length', function(){
		expect(generateRandomString('all', 4).length).not.toBeGreaterThan(4);
	});
	
	it('should output a string of the specified fixed length', function(){
		expect(generateRandomString('all', 10, true).length).toEqual(10);
	});
	
	it('if not specified, the default string length should not be any longer than 10', function(){
		expect(generateRandomString('all').length).toBeLessThan(11);
	});
	
	describe('pattern matches', function(){
		
		it('"num" should only output numbers', function(){
			expect(generateRandomString('num', 5)).toMatch(/\d/g);
		});
		
		it('"alphalc" should only output lower case alpha strings', function(){
			expect(generateRandomString('alphalc', 5)).toMatch(/[a-z]/g);
		});
		
		it('"alphauc" should only output upper case alpha strings', function(){
			expect(generateRandomString('alphauc', 5)).toMatch(/[A-Z]/g);
		});
		
		it('"alpha" should only output alphanumeric strings (upper case and lower case)', function(){
			expect(generateRandomString('alpha', 5)).toMatch(/[a-zA-Z0-9]/g);
		});
		
		it('"special" should only output special character strings', function(){
			expect(generateRandomString('special', 5)).toMatch(/[!@#$%^&*()-_=+`~[\]{}\\\|;:\'"<>.,\/?]/g);
		});
		
		it('"all" can output all characters', function(){
			expect(generateRandomString('special', 5)).toMatch(/[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}\\\|;:\'"<>.,\/?]/g);
		});
		
	});
});