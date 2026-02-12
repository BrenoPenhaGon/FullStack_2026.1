dias = int(input("Quantos dias você esteve com o carro: "))
km = float(input("Quantos quilometros o carro rodou: "))
preço = (dias * 60) + (km * 0.15)
print ("O valor a ser pago é R$ %.2f" % preço )