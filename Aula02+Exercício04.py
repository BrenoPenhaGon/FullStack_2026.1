dias = int(input("Digite a quantidade de dias: "))
horas = int(input("Digite a quantidade de horas: "))
minutos = int(input("Digite a quantidade de minutos: "))
segundos = int(input("Digite a quantidade de segundos :"))
tempototal = (dias*24*60**2)+(horas*60**2)+(minutos*60)+segundos
print ("Seu tempo total em segundos foi de:", tempototal)