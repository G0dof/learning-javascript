from os import system

system("mkdir htmlFiles")
for c in range(3, 10+1):
    with open(f"ex{c}.js", "r", encoding="utf-8") as test1:
        exercises = test1.read()
    with open(f"ex0{c}.html","w", encoding="utf-8") as test2:
        test2.write(f"""
        <!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8" />
        <meta name="author" content="Pedro Ferreira Sudre" />
        <meta name="keywords" content="ex0{c}, exercicio0{c}" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Exercício {c}</title>
        <style>
            * {"{font-family: Verdana; font-size: 50pt;text-align: center;}"}
        </style>
    </head>
    <body>
        <script>
            {exercises}
        </script>
    </body>
</html>
        """)
    system(f"mv ex0{c}.html htmlFiles/")