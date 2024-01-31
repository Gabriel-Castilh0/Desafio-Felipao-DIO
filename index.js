let nomeHeroi = "Super OZ";
let totalXp = 2500;
let nivel = ""
let cont = 0

console.log ("Conclua 3 missês especias e ganhe 2x seu XP total! como recompensa por cada missão!")
while (cont <3){
    totalXp = totalXp * 2;
    console.log("Seu XP atual subiu para " + totalXp + ", parabéns héroi!!!");
    cont++
}


if (totalXp <= 1000) {
        nivel = "ferro";
}
    else if (totalXp > 1000 && totalXp <= 2000) {    
        nivel = "Bronze";
    } 
        else if (totalXp > 2000 && totalXp <= 5000){
            nivel = "Prata";
        }
            else if (totalXp > 5000 && totalXp <= 7000){
                nivel = "Ouro";
            }
                else if (totalXp > 7000 && totalXp <= 8000){
                    nivel = "Platina";
                }
                    else if (totalXp > 8000 && totalXp <= 9000){
                        nivel = "Ascendente";
                    }
                        else if (totalXp > 9000 && totalXp <= 10000){
                            nivel = "Imortal";
                        }
                            else if(totalXp >= 10001){
                                nivel = "Radiante";
                            }    

console.log ("parabéns pelo seu esforço no campo de batalha, " + nomeHeroi + "!")
console.log ("Seu nível agora é: ***" + nivel + "***")
        







