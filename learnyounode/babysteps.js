var result = 0;
for (var i = 2; i <= process.argv.length -1; i++) {
	result += Number(process.argv[i]);
}
console.log(result);