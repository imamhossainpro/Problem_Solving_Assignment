//Task-1
//kilometerToMeter
function kilometerToMeter(kilometer){
    var kilometer = kilometer * 1000;
    return kilometer;
}

var result = kilometerToMeter(5);
//console.log(result);

//Task - 2
//budgetCalculator

function budgetCalculator(watch, phone, laptop) {
    var  watchBudget = watch * 50;
    var phoneBudget = phone * 100;
    var laptopBudget = laptop * 500;
    var totalBudget = watchBudget +phoneBudget + laptopBudget;
    return totalBudget;
}

var totalBudgetResult = budgetCalculator(1,2,1);
//console.log("Total Bill:", totalBudgetResult);

//Task - 3
//hotelCost

function hotelCost(day=0){
    if(typeof day==='number' && day>0){
        if(day<=10)return day*100;
        else if(day<=20)return (10*100)+(day-10)*80;
        else return day*50;
    }else return null;
}
//console.log(hotelCost(15));

//Task - 4
//megaFriend
function megaFriend(friendArr=[]){
    if(Array.isArray(friendArr) && friendArr.length>0){
        let maxLengthName = '';
        friendArr.forEach(name => {
            if(maxLengthName.length<name.length){
                maxLengthName = name;
            }
        })
        return maxLengthName;
    }else return null;
}
 //console.log(megaFriend(['Nazmul Hasan Hridoy', 'Imam Hossain','Jitu','Ahsan safi' ,'Masuk Sorker Batista']));
