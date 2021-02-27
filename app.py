from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('inicio.html')

@app.route('/contacto')
def contacto():
    return render_template('contacto.html')

@app.route('/nutriologa')
def nutriologa():
    return render_template('nutriologaexperiencia.html')

@app.route('/cita')
def cita():
    return render_template('Reserva_cita.html')

@app.route('/alimentacionsana')
def alimentacionsana():
    return render_template('alimentacionsana.html')

@app.route('/embarazo')
def embarazo():
    return render_template('alimentacion_embarazada.html')

@app.route('/calculadora')
def calculadora():
    return render_template('calculadora_calorias.html')

@app.route('/ejercicio')
def ejercicio():
    return render_template('alimentacion_gym.html')




if __name__ == '__main__':
    app.run(debug=True)
