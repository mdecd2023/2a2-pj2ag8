var tipuesearch = {"pages": [{'title': 'About', 'text': '\n 第8組 \n 組長:41023151張育銓 \n 組員:41023103江芷柔、41023116吳勁毅、41023132林秉賢 \n 倉儲: https://github.com/mdecd2023/2a2-pj2ag8 \n 網頁: https://mdecd2023.github.io/2a2-pj2ag8/content/index.html \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'w9', 'text': '1(主機): /downloads/1zmq_bubbleRob_red_wzas_key_movement.py \n 2: /downloads/2zmq_bubbleRob_green_arrow_key_movement.py \n 3: /downloads/3zmq_bubbleRob_green_arrow_key_movement.py \n 4: /downloads/4zmq_bubbleRob_green_arrow_key_movement.py \n ttt檔: /downloads/zmq_bubbleRob_red_green.ttt \n 四人連線video \n \n \n \n \n', 'tags': '', 'url': 'w9.html'}, {'title': 'w10', 'text': '\n \n 有關 CoppeliaSim zmqRemoteAPI 問題 \n \n \n \n \n 1 . What is zmqRemoteAPI, and how does it relate to CoppeliaSim? \n 什麼是zmqRemoteAPI，它與 VoppeliaSim 有什麼關係？ \n *41023132 \n A :\xa0 zmqRemoteAPI 是用於機器人仿真軟件 CoppeliaSim 的遠程應用程序編程接口（API）。它允許使用者從外部程序（例如Python腳本、MATLAB或C++應用程序）控制和交互運行中的CoppeliaSim實例。 \n zmqRemoteAPI使用 ZeroMQ 這個輕量級的消息庫進行CoppeliaSim和外部程序之間的進程間通信。它提供了一種簡單靈活的方法，可以向CoppeliaSim發送命令、從仿真中接收數據以及操作場景。 \n 使用zmqRemoteAPI，使用者可以執行各種任務，例如在場景中創建和修改物體、控制機器人、模擬傳感器和視覺系統以及從仿真中收集數據。這使得使用者可以使用外部程序進行自動化測試、算法開發和機器人控制等操作，進一步擴展了CoppeliaSim的應用範圍。 \n ------------------------------------------------------------------------------ \n 2 . How do you establish a connection between a Python script and CoppeliaSim using zmqRemoteAPI? \n 如何使用 zmqRemoteAPI 在 Python 腳本和 CoppeliaSim 之間建立連接？ \n *41023103 \n A: 在場景中添加遠程API服務器。 \n 選擇 "Add" -> "Add-ons" -> "Remote API server"。 \n 在遠程API服務器的屬性中，將 "Enabled" 設置為 True，並確保 "Port number" 與Python腳本中使用的端口號匹配。 \n 在Python腳本中使用 ZeroMQ 庫連接到CoppeliaSim。 \n 安裝PyZMQ庫：在終端中輸入 "pip install pyzmq"。 \n 使用以下代碼建立到CoppeliaSim的連接： \n import zmq context = zmq.Context() socket = context.socket(zmq.REQ) socket.connect("tcp://127.0.0.1:端口號") # 確保端口號與CoppeliaSim中的遠程API服務器端口號匹配 \n 使用zmqRemoteAPI發送命令。 \n 可以使用socket.send_string()方法發送命令。 \n 使用socket.recv()方法接收從CoppeliaSim返回的數據。 \n 使用zmqRemoteAPI發送命令。 \n 可以使用socket.send_string()方法發送命令。 \n 使用socket.recv()方法接收從CoppeliaSim返回的數據。 \n import zmq context = zmq.Context() socket = context.socket(zmq.REQ) socket.connect("tcp://127.0.0.1:19997") # 確保端口號與CoppeliaSim中的遠程API服務器端口號匹配 # 查詢機器人的位置 socket.send_string("simGetObjectPosition(robotHandle,-1)") response = socket.recv() print(response) \n ------------------------------------------------------------------------------ \n 3 . What are some common use cases for zmqRemoteAPI in CoppeliaSim? \n CoppeliaSim 中 zmqRemoteAPI 的一些常見用例是什麼？ \n *41023116 \n A: mqRemoteAPI 是 CoppeliaSim 強大的遠程控制功能，使使用者能夠以多種方式控制和交互 CoppeliaSim 場景，以下是一些常見的使用案例： \n 1.機器人控制：使用 zmqRemoteAPI，可以編寫 Python 或其他腳本來控制機器人運動，例如控制機器人行進、轉向、抓取物體等等。 \n 2.傳感器模擬：CoppeliaSim 支持多種傳感器模擬，包括視覺、激光雷達和超聲波等。使用 zmqRemoteAPI，可以編寫腳本來控制傳感器的操作和收集傳感器數據。 \n 3.自動化測試：使用 zmqRemoteAPI，可以自動化執行 CoppeliaSim 的測試用例，並收集測試結果。 \n 4.遠程控制：使用 zmqRemoteAPI，可以從遠程計算機或設備上控制 CoppeliaSim，例如遠程操縱機器人進行任務。 \n 5.仿真教學：使用 zmqRemoteAPI，可以編寫交互式仿真教學程序，向學習者展示機器人的運動、傳感器模擬等。 \n ------------------------------------------------------------------------------ \n 4 . What are the advantages and disadvantages of using zmqRemoteAPI compared to other methods of communication between Python and CoppeliaSim? \n 與 Python 和 CoppeliaSim 之間的其他通信方法相比，使用 zmqRemoteAPI 有哪些優點和缺點？ \n *41023151 \n A: zmqRemoteAPI 是 Python 和 CoppeliaSim 之間通信的幾種方法之一，每種方法都有其優點和缺點。以下是使用 zmqRemoteAPI 的優點和缺點： \n 優點： \n 1.易於使用：zmqRemoteAPI 是一種簡單易用的 Python 和 CoppeliaSim 之間通信方法。它使用 ZeroMQ，這是一個輕量級且高效的通信庫。 \n 2.快速：zmqRemoteAPI 是 Python 和 CoppeliaSim 之間快速的通信方法，因為它使用 ZeroMQ 的高性能消息模式。 \n 3.彈性：zmqRemoteAPI 提供了一種靈活且可擴展的方式來與 CoppeliaSim 交互。它允許在 Python 和 CoppeliaSim 之間進行實時控制和數據交換，這對於各種應用程序非常有用。 \n 4.跨平台：zmqRemoteAPI 是 Python 和 CoppeliaSim 之間通信的跨平台方法，因為 ZeroMQ 可用於廣泛的平台，包括 Windows、Linux 和 macOS。 \n 缺點： \n 1.功能有限：zmqRemoteAPI 提供了一個有限的 API 命令集與 CoppeliaSim 交互。儘管可以實現自定義的 API 命令，但需要額外的編程工作。 \n 2.性能問題：zmqRemoteAPI 是一種基於消息的協議，當在 Python 和 CoppeliaSim 之間傳輸大量數據時可能會出現性能問題。 \n 3.需要配置：使用 zmqRemoteAPI 需要在 CoppeliaSim 中設置遠程 API 服務器，並在 Python 中配置連接。這對於初學者來說可能有點複雜。 \n 4.調試問題：調試 zmqRemoteAPI 連接可能會有挑戰性，因為錯誤可能是由於不正確的設置或配置而發生的。 \n ------------------------------------------------------------------------------ \n 5.Can you give an example of a project or task that you could complete using zmqRemoteAPI in CoppeliaSim? \n 您能否舉例說明您可以在 CoppeliaSim 中使用 zmqRemoteAPI 完成的項目或任務？ \n *41023103 \n \n \n \n \n \n \n A: 當使用 zmqRemoteAPI 與 CoppeliaSim 進行通信時，可以完成許多項目或任務。以下是幾個例子： \n 1.模擬控制：zmqRemoteAPI 允許您從 Python 腳本中控制 CoppeliaSim 的模擬。您可以更改模型的參數，啟動和停止模擬，設置模擬的時間步長，並在模擬運行時收集數據。 \n 2.運動控制：zmqRemoteAPI 還可以用於運動控制。您可以將 CoppeliaSim 的模型設置為動態物體，然後使用 Python 腳本控制它的運動。例如，您可以設置機器人模型，並使用 Python 腳本控制它在仿真環境中移動。 \n 3.物體檢測和識別：zmqRemoteAPI 可以用於實時檢測和識別 CoppeliaSim 中的物體。您可以將相機添加到仿真環境中，然後使用 Python 腳本檢測相機拍攝的圖像中的物體。這對於自主駕駛汽車和機器人應用非常有用。 \n 4.遠程監控：zmqRemoteAPI 允許您從 Python 腳本中監控 CoppeliaSim 中的數據。您可以實時收集仿真環境中的數據，例如機器人的位置、速度和加速度等。這些數據可以用於分析和優化仿真環境中的算法和系統。 \n \n 四人連線實際操作video \n \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Brython_ex2', 'text': 'This code uses the Euler method to approximate the solution to the ODE dy/dx = x - y with an initial condition of y0 = 1.0. The solution is calculated for a range of x values from 0 to 5. \n \n \n \n \n Solve ODE: \n from browser import document\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new paragraph element and set its text content to the solution\np = document.createElement(\'p\')\np.textContent = f"The solution to the ODE is: {y}"\n\n# Append the paragraph element to the body of the webpage\ndocument.body.appendChild(p) \n \n \n \n \n \n Brython environment and  Plotly.js : \n <script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\']});\n}\n// ]]></script>\n<p id="brython_div"></p> \n Brython programe with Plotly.js: \n from browser import document, window\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new div element to hold the plot\n#plot_div = document.createElement(\'div\')\n#plot_div.id = \'plot\'\n#document.body.appendChild(plot_div)\nplot_div = document["brython_div"]\n\n# Plot the solution using plotly.js\ndata = [{\'x\': x, \'y\': y}]\nwindow.Plotly.newPlot(\'brython_div\', data) \n This code defines a function dy_dx that represents the mass-spring-damper ordinary differential equation. The Euler method is used to solve this equation for a range of x values from 0 to 20 with initial conditions of y0 = [1.0, 0.0]. The solution is then plotted on the webpage using  plotly.js . \n \n \n This code defines a function dy_dx that represents the mass-spring-damper system with a PID controller. The gains of the PID controller are set to Kp = 10.0, Ki = 1.0, and Kd = 0.5. The Euler method is used to solve this system of equations for a range of x values from 0 to 20 with initial conditions of y0 = [0.0, 0.0, 0.0, 0.0]. The response of the system is then plotted on the webpage using  plotly.js . \n \n \n \n \n \n \n \n STL part viewer \n \n \n Using  sine-cosine algorithm  to optimize with constraints in Brython: \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n Plot the result by using  plotly.js : \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n<div id="plot"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n\n# Plot the result using Plotly.js\ndata = [\n    {\n        \'x\': [best_solution[0]],\n        \'y\': [best_solution[1]],\n        \'mode\': \'markers\',\n        \'marker\': {\'size\': 12},\n        \'name\': \'Best Solution\'\n    }\n]\n\nlayout = {\n    \'xaxis\': {\'range\': [-10, 10]},\n    \'yaxis\': {\'range\': [-10, 10]},\n}\n\nPlotly.newPlot(\'plot\', data, layout)\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html>', 'tags': '', 'url': 'Brython_ex2.html'}]};