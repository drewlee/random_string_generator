var chars = {};

chars.num = '0 1 2 3 4 5 6 7 8 9'.split(' ');
chars.alphalc = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' ');
chars.alphauc = chars.alphalc.join(' ').toUpperCase().split(' ');
chars.alpha = chars.alphalc.concat(chars.alphauc);
chars.alphanum = chars.alpha.concat(chars.num);
chars.special = '! @ # $ % ^ & * ( ) - _ = + ` ~ [ ] { } \\ | ; : \' " < > . , / ?'.split(' ');
chars.all = chars.alphanum.concat(chars.special);