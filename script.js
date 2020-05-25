'use strict';
let money = +prompt('Ваш бюджет на месяц?','');
let time = prompt('Введите дату в формате YYYY-MM-DD','');
//let time = +prompt("Введите дату в формате YYYY-MM-DD",'');
var answer1 = prompt("Введите 1 обязательную статью расходов в этом месяце",'');
var answer2 = +prompt("Во сколько обойдется?",'');
var answer3 = prompt("Введите 2 обязательную статью расходов в этом месяце",'');
var answer4 = +prompt("Во сколько обойдется?",'');
let appData = {
    budget: ((money-answer2+answer4)/30),
    timeData: time,
    expenses: {
        answer1 : answer2,
        answer3 : answer4,
    },
    optionalExpenses: {},//необязательные расходы
    income: {},//допдоход
    saving: false
}
alert("Ваш бюджет на 1 день составит " + appData.budget.toFixed(1) + ' руб.');