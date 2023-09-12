// Create an object where the property names match your HTML's data-var-name attributes:
const codes = {
  myCode1tuto1:`from flask import Flask, jsonify, render_template, request, redirect, url_for, g
  import sqlite3, os, time
  import subprocess
  import signal
  import serial
  # POUR LE PATH CELA DEPEND DE VOTRE APPAREIL (SI VOUS ETES SUR RASPBERRY PAS BESOIN DE FAIRE CELA)
  # os.environ["PATH"] += os.pathsep + '/home/panache/.local/lib/python3.10'
  
  app = Flask(__name__, static_url_path='/static')
  
  @app.route('/')
  def index():
      return render_template('index.html')
  
  # START LE FICHIER PYTHON database.py
  process = None
  @app.route('/start_database', methods=['GET'])
  def start_database():
      global process
      if process is None:
          process = subprocess.Popen(['python', 'database.py'])
          # process = subprocess.Popen(['python3.10', 'database.py'])
          return 'Database execution started'
      else:
          return 'Database execution already in progress'
  # SI UNE ENVIE DE FAIRE UN BOUTON QUI STOP LE PROCESSUS
  # @app.route('/stop_database', methods=['GET'])
  # def stop_database():
  #     global process
  #     if process is not None:
  #         process.send_signal(signal.SIGINT)
  #         process = None
  #         return 'Database execution stopped'
  #     else:
  #         return 'No database execution in progress'
  
  DATABASE = 'data/arduino_data.db'
  def get_db():
      db = getattr(g, '_database', None)
      if db is None:
          db = g._database = sqlite3.connect(DATABASE)
      return db
  @app.route('/datacenter', methods=['GET'])
  def datacenter():
      table_name = 'myDataTable'
      db = get_db()
      cursor = db.cursor()
      cursor.execute(f"SELECT * FROM {table_name}")
      data = cursor.fetchall()
      return jsonify(data)
  
  if __name__ == '__main__':
      app.run(debug=True)`,
  myCode2tuto1:`import serial
  import sqlite3
  import re
  import datetime
  
  conn = sqlite3.connect('data/arduino_data.db')
  c = conn.cursor()
  
  c.execute('''CREATE TABLE IF NOT EXISTS myDataTable (
                   id INTEGER PRIMARY KEY AUTOINCREMENT,
                   myData INTEGER,
                   Date INTEGER)''')
  
  ser = serial.Serial('/dev/ttyACM0', 9600)
  
  # Regular expressions to extract the time values
  Data_pattern = re.compile(r'<(\d+)>')
  
  while True:
      data = ser.readline().decode().strip()
      print("Received:", data)
  
      Data_pattern_match = Data_pattern.search(data)
  
      if Data_pattern_match:
          current_date = datetime.datetime.now().replace(microsecond=0)
          Data_val = int(Data_pattern_match.group(1))
          c.execute("INSERT INTO myDataTable (myData, Date) VALUES (?, ?)", (Data_val, current_date))
          conn.commit()
  
  conn.close()`,
  myCode3tuto1:`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello world!</title>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js" defer></script>
      <script src="{{ url_for('static', filename='script.js') }}" defer></script>
  </head>
  
  <body>
      <section>
          <div>
              <h2>Table</h2>
              <div>
                  <table id="TableDatacenter">
                      <tr>
                          <th>Time</th>
                          <th>Data</th>
                      </tr>
                  </table>
              </div>
          </div>
      </section>
  </body>
  </html>`,
  myCode4tuto1:`$(document).ready(function() {
    StartDatabase();
});

function StartDatabase() {
    setInterval(callDatacenter, 5000);
    // $.get('/start_database', function(data) {
    // console.log(data);
    // });
}

function callDatacenter() {
    $.getJSON('/datacenter', {table_name: "myDataTable"}, function(data) {
        let table = $('#TableDatacenter');
        table.find('tr:gt(0)').remove(); // Remove all rows except the header

        // Sort the data based on the second column (Time) in ascending order
        data.sort(function(a, b) {
            return a[2] - b[2];
        });

        for (let i = 0; i < data.length; i++) {
            dataTime = data[i][2];
            dataData = data[i][1];
            let newRow = $('<tr></tr>').append('<td>' + dataTime + '</td>').append('<td>' + dataData + '</td>');
            table.append(newRow);
        }
    });
}`,
    myCode5tuto1:`void setup() {
        Serial.begin(9600);
        randomSeed(analogRead(0));
      }
      
      void loop() {
        int randNumber = random(0, 100);
        Serial.print("<");
        Serial.print(randNumber);
        Serial.println(">");
        delay(5000);
      }`,








  myCode1tuto2:`from flask import Flask, render_template
  from flask_sqlalchemy import SQLAlchemy
  
  app = Flask(__name__)
  app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///chemin/vers/votre/base/de/donnees.db'
  db = SQLAlchemy(app)
  
  class Data(db.Model):
      id = db.Column(db.Integer, primary_key=True)
      # Ajoutez ici les colonnes correspondant aux données que vous souhaitez récupérer depuis la base de données
  
  @app.route('/')
  def index():
      data = Data.query.all()
      return render_template('index.html', data=data)
  
  if __name__ == '__main__':
      app.run(host='0.0.0.0')
  `,
  myCode2tuto2:`<!DOCTYPE html>
  <html>
  <head>
      <title>Site web Flask</title>
  </head>
  <body>
      <h1>Données depuis la base de données:</h1>
      <ul id="data-list"></ul>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script>
          $(document).ready(function() {
              $.ajax({
                  url: '/data',
                  method: 'GET',
                  success: function(response) {
                      var dataList = response.data;
                      var dataItems = '';
                      for (var i = 0; i < dataList.length; i++) {
                          dataItems += '<li>' + dataList[i].name + ': ' + dataList[i].value + '</li>';
                      }
                      $('#data-list').html(dataItems);
                  }
              });
          });
      </script>
  </body>
  </html>
`,
  myCode3tuto2:`def get_data_from_arduino():
       arduino = serial.Serial('/dev/ttyACM0', 9600)  # Assurez-vous de spécifier le bon port série ici
       arduino.write(b'R')  # Envoyez une commande à l'Arduino pour récupérer les données
       time.sleep(1)  # Attendez une seconde pour permettre à l'Arduino de traiter la commande
       data = arduino.readline().decode().rstrip()
       arduino.close()
       return data
`,
myCode4tuto2:`@app.route('/')
def index():
    data = Data.query.all()
    arduino_data = get_data_from_arduino()
    # Insérez les données de l'Arduino dans la base de données SQLite ici
    return render_template('index.html', data=data)

`,
}

// Loop through each element with a data-var-name attribute:
document.querySelectorAll('[data-var-name]').forEach(el => {
  // Get the variable name from the data attribute:
  const varName = el.getAttribute("data-var-name");
  // Set the text of the element to the corresponding code:
  el.textContent = codes[varName];
})

function copyCodeToClipboard(varName)
{
  var textarea = document.createElement("textarea");
  textarea.textContent = codes[varName];
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  if (!textarea || !varName)
  {
    console.log('error');
    alert('error: ' + varName);
    return (0);
  }
  console.log('Copied to clipboard 📋: ' + varName);
//   alert('Copied to clipboard 📋: ' + varName);
}






const buttons = document.querySelectorAll(".readmore-content button");

for (const button of buttons) {
  button.addEventListener("click", function() {
    button.innerText = "Copied!";
    button.style.backgroundColor = "#008000";

    setTimeout(() => {
      button.style.backgroundColor = "";
      button.innerText = "Copy code";
    }, 2000);
  });
}