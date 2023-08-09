// Create an object where the property names match your HTML's data-var-name attributes:
const codes = {
  myCode1tuto1:`from flask import Flask, render_template
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
  myCode2tuto1:`<!DOCTYPE html>
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
  myCode3tuto1:`def get_data_from_arduino():
       arduino = serial.Serial('/dev/ttyACM0', 9600)  # Assurez-vous de spécifier le bon port série ici
       arduino.write(b'R')  # Envoyez une commande à l'Arduino pour récupérer les données
       time.sleep(1)  # Attendez une seconde pour permettre à l'Arduino de traiter la commande
       data = arduino.readline().decode().rstrip()
       arduino.close()
       return data
`,
myCode4tuto1:`@app.route('/')
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