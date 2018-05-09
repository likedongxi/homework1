function isLeap(year){
	if( year %400 == 0){
		return 1;
	}else if(year %4 ==0 && year %100 != 0){
		return 1
	}
	return 0;
}
year1 = 1900
console.log("%d is leap year=%d",year1, isLeap(year1));
year1 = 1902
console.log("%d is leap year=%d",year1, isLeap(year1));
year1 = 1904
console.log("%d is leap year=%d",year1, isLeap(year1));
year1 = 2000
console.log("%d is leap year=%d",year1, isLeap(year1));
year1 = 2008
console.log("%d is leap year=%d",year1, isLeap(year1));

