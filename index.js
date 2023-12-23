rankInfo("Luan", 101, 1);

//----------------------------------------------//
function rankInfo(name, victories, defeats){
    let rankBalance = getRankBalance(victories, defeats);
    let rankLevel = getRankLevel(rankBalance);

    console.log(`${name} tem de saldo de ${rankBalance} e está no nível de ${rankLevel}`);
}

function getRankBalance(victories, defeats){
    return victories - defeats;
}

function getRankLevel(rankBalance){
    let rankLevel;

    if (rankBalance <= 10){
        rankLevel = "Ferro";
    }else if (rankBalance >= 11 && rankBalance <= 20){
        rankLevel = "Bronze";
    }else if (rankBalance >= 21 && rankBalance <= 50){
        rankLevel = "Prata";
    }else if (rankBalance >= 51 && rankBalance <= 80){
        rankLevel = "Ouro";
    }else if (rankBalance >= 81 && rankBalance <= 90){
        rankLevel = "Diamante";
    }else if (rankBalance >= 91 && rankBalance <= 100){
        rankLevel = "Lendário";
    }else {
        rankLevel = "Imortal";
    }
    return rankLevel;
}