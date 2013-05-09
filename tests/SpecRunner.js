describe('testing character definitions', function(){
  
  it('generateRandomString._chars is defined', function(){
    expect(typeof generateRandomString._chars !== 'undefined').toBeTruthy();
  });
  
  it('generateRandomString._chars.num contains the expected values', function(){
    expect(generateRandomString._chars.num).toEqual('0123456789');
  });
  
  it('generateRandomString._chars.alphalc outputs the expected values', function(){
    expect(generateRandomString._chars.alphalc).toEqual('abcdefghijklmnopqrstuvwxyz');
  });
  
  it('generateRandomString._chars.alphauc outputs the expected values', function(){
    expect(generateRandomString._chars.alphauc).toEqual('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  });
  
  it('generateRandomString._chars.alpha outputs the expected values', function(){
    expect(generateRandomString._chars.alpha)
      .toEqual('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
  });
  
  it('generateRandomString._chars.alphanum outputs the expected values', function(){
    expect(generateRandomString._chars.alphanum)
      .toEqual('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
  });
  
  it('generateRandomString._chars.special outputs the expected values', function(){
    expect(generateRandomString._chars.special).toEqual('!@#$%^&*()-_=+`~[]{}\\|;:\'"<>.,/?');
  });
  
  it('generateRandomString._chars.all outputs the expected values', function(){
    expect(generateRandomString._chars.all)
      .toEqual('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+`~[]{}\\|;:\'"<>.,/?');
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
      expect(generateRandomString('num', 5)).toMatch(/^\d+$/g);
    });
    
    it('"alphalc" should only output lower case alpha strings', function(){
      expect(generateRandomString('alphalc', 5)).toMatch(/^[a-z]+$/g);
    });
    
    it('"alphauc" should only output upper case alpha strings', function(){
      expect(generateRandomString('alphauc', 5)).toMatch(/^[A-Z]+$/g);
    });
    
    it('"alpha" should only output alphanumeric strings (upper case and lower case)', function(){
      expect(generateRandomString('alpha', 5)).toMatch(/^[a-zA-Z0-9]+$/g);
    });
    
    it('"special" should only output special character strings', function(){
      expect(generateRandomString('special', 5)).toMatch(/^[!@#$%^&*()-_=+`~[\]{}\\\|;:\'"<>.,\/?]+$/g);
    });
    
    it('"all" can output all characters', function(){
      expect(generateRandomString('special', 5)).toMatch(/^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}\\\|;:\'"<>.,\/?]+$/g);
    });
    
  });
});