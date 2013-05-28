describe('testing character definitions', function(){
  
  it('randomize._chars is defined', function(){
    expect(typeof randomize._chars !== 'undefined').toBeTruthy();
  });
  
  it('randomize._chars.num contains the expected values', function(){
    expect(randomize._chars.num).toEqual('0123456789');
  });
  
  it('randomize._chars.alphalc outputs the expected values', function(){
    expect(randomize._chars.alphalc).toEqual('abcdefghijklmnopqrstuvwxyz');
  });
  
  it('randomize._chars.alphauc outputs the expected values', function(){
    expect(randomize._chars.alphauc).toEqual('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  });
  
  it('randomize._chars.alpha outputs the expected values', function(){
    expect(randomize._chars.alpha)
      .toEqual('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
  });
  
  it('randomize._chars.alphanum outputs the expected values', function(){
    expect(randomize._chars.alphanum)
      .toEqual('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
  });
  
  it('randomize._chars.special outputs the expected values', function(){
    expect(randomize._chars.special).toEqual('!@#$%^&*()-_=+`~[]{}\\|;:\'"<>.,/?');
  });
  
  it('randomize._chars.all outputs the expected values', function(){
    expect(randomize._chars.all)
      .toEqual('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+`~[]{}\\|;:\'"<>.,/?');
  });
  
});


describe('testing randomize function', function(){
  
  it('should output a value even with no arguments', function(){
    expect(randomize()).not.toEqual('');
  });
  
  it('should not output a string longer than the specified length', function(){
    expect(randomize('all', 4).length).not.toBeGreaterThan(4);
  });
  
  it('should output a string of the specified fixed length', function(){
    expect(randomize('all', 10, true).length).toEqual(10);
  });
  
  it('if not specified, the default string length should not be any longer than 10', function(){
    expect(randomize('all').length).toBeLessThan(11);
  });
  
  describe('pattern matches', function(){
    
    it('"num" should only output numbers', function(){
      expect(randomize('num', 5)).toMatch(/^\d+$/g);
    });
    
    it('"alphalc" should only output lower case alpha strings', function(){
      expect(randomize('alphalc', 5)).toMatch(/^[a-z]+$/g);
    });
    
    it('"alphauc" should only output upper case alpha strings', function(){
      expect(randomize('alphauc', 5)).toMatch(/^[A-Z]+$/g);
    });
    
    it('"alpha" should only output alphanumeric strings (upper case and lower case)', function(){
      expect(randomize('alpha', 5)).toMatch(/^[a-zA-Z0-9]+$/g);
    });
    
    it('"special" should only output special character strings', function(){
      expect(randomize('special', 5)).toMatch(/^[!@#$%^&*()-_=+`~[\]{}\\\|;:\'"<>.,\/?]+$/g);
    });
    
    it('"all" can output all characters', function(){
      expect(randomize('special', 5)).toMatch(/^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}\\\|;:\'"<>.,\/?]+$/g);
    });
    
  });
});