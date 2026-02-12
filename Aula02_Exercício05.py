ghora = float(input("Quanto você gannha por hora:"))
thora = int(input("Quantas horas você trabalha no mês:"))
bruto = ghora*thora
ir = bruto*0.11
inss = bruto*0.08
sindicato = bruto*0.5
salario = bruto - (ir+inss+sindicato)
print("+Salário bruto:", bruto, "\n-IR:", ir, "\n-INSS:", inss, "\n-Sindicato:", sindicato, "\n+Salário Líquido", salario)