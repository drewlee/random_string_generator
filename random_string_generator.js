(function(w){
var chars = {};

chars.num = '0 1 2 3 4 5 6 7 8 9'.split(' ');
chars.alphalc = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' ');
chars.alphauc = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ');
chars.alpha = chars.alphalc.concat(chars.alphauc);
chars.alphanum = chars.alpha.concat(chars.num);
chars.special = '! @ # $ % ^ & * ( ) - _ = + ` ~ [ ] { } \\ | ; : \' " < > . , / ?'.split(' ');
chars.all = chars.alphanum.concat(chars.special);

console.log(chars.alphalc);

w.generateRandomString = function(type, max, fixed){
	type = type in chars ? type : 'all';
	
	var str = '',
		len = fixed ? max : Math.ceil(Math.random() * (max || 10)),
		idx = chars[type].length;
	
	for(var i=0; i<len; i++){
		str += chars[type][Math.floor(Math.random() * idx)];
	}
	
	return str;
};
})(window);