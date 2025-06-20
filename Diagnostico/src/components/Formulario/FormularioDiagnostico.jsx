import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
//Rode uvicorn main:app --reload

const FormularioDiagnostico = () => {
  const navigate = useNavigate(); 
  const [inputs, setInputs] = useState({ H2: '', CH4: '', C2H2: '', C2H4: '', C2H6: '' });

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const diagnosticar = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/diagnostico', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        H2: parseFloat(inputs.H2),
        CH4: parseFloat(inputs.CH4),
        C2H2: parseFloat(inputs.C2H2),
        C2H4: parseFloat(inputs.C2H4),
        C2H6: parseFloat(inputs.C2H6)
      })
    });
    const data = await res.json();

    navigate("/resultados", { state: data });
  };

  return (
    <section style={styles.container}>
      <div style={styles.formDiv}>
        <form style={styles.formulario} onSubmit={diagnosticar}>
          <div style={styles.divTitulo}>
            <h2 style={styles.titulo}>
              Diagnosticar
            </h2>
          </div>

          <div style={styles.conjunto}>
            <div style={styles.campo}>
              <label style={styles.label}>H2 (ppm):</label>
              <input
                type="number"
                name="H2"
                value={inputs.H2}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.campo}>
              <label style={styles.label}>CH4 (ppm):</label>
              <input
                type="number"
                name="CH4"
                value={inputs.CH4}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.conjunto}>
            <div style={styles.campo}>
              <label style={styles.label}>C2H2 (ppm):</label>
              <input
                type="number"
                name="C2H2"
                value={inputs.C2H2}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.campo}>
              <label style={styles.label}>C2H4 (ppm):</label>
              <input
                type="number"
                name="C2H4"
                value={inputs.C2H4}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.sozinho}>
            <div style={styles.campo}>
              <label style={styles.label}>C2H6 (ppm):</label>
              <input
                type="number"
                name="C2H6"
                value={inputs.C2H6}
                onChange={handleChange}
                required
                style={styles.inputSolo}
              />
            </div>
          </div>

          <div style={styles.divBotao}>
            <button type="submit" style={styles.botao}>Confirmar</button>
          </div>
        </form>
      </div>

    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '101px',
    marginTop: '20px',
    marginBottom: '20px',
  },

  formDiv: {
    marginTop: '20px',
    padding: '3px',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '450px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
  },

  formulario: {
    alignItems: 'center',
    backgroundColor: '#161B22',
    borderRadius: '6px',
    paddingBottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    fontFamily: 'Courier New, monospace',
  },

  formulario2: {
    alignItems: 'center',
    backgroundColor: '#161B22',
    borderRadius: '12px',
    paddingBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Courier New, monospace',
  },

  divTitulo: {
    marginBottom: '30px',
    marginTop: '10px',
    textAlign: 'center',
    borderBottom: '1px solid #30363D',
  },

  titulo: {
    color: '#C9D1D9',
    fontSize: '45px',
    fontWeight: 'bold',
    lineHeight: '1.3',
    marginBottom: '20px',
  },

  subtitulo: {
    color: '#58A6FF',
    fontSize: '18px',
    marginTop: '15px',
    marginBottom: '5px',
    fontWeight: '600',
    textAlign: 'center',
  },

  texto: {
    color: '#C9D1D9',
    fontSize: '14px',
    textAlign: 'justify',
    lineHeight: '1.6',
    padding: '0 10px',
  },

  detalhesBox: {
    padding: '10px 5px',
    width: '100%',
  },

  conjunto: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },

  sozinho: {
    display: 'flex',
    justifyContent: 'center',
  },

  campo: {
    display: 'flex',
    flexDirection: 'column',
  },

  label: {
    color: '#8B949E',
    marginBottom: '5px',
    paddingLeft: '5px',
    fontSize: '15px',
    fontWeight: '500',
  },

  input: {
    width: '160px',
    backgroundColor: '#0D1117',
    color: '#C9D1D9',
    border: '1px solid #30363D',
    borderRadius: '5px',
    padding: '5px',
    paddingLeft: '10px',
    fontSize: '14px',
    outline: 'none',
    paddingBottom: '10px',
    paddingTop: '10px',
    transition: 'border-color 0.3s',
  },

  inputSolo: {
    width: '345px',
    backgroundColor: '#0D1117',
    color: '#C9D1D9',
    border: '1px solid #30363D',
    borderRadius: '5px',
    padding: '5px',
    paddingLeft: '10px',
    fontSize: '14px',
    outline: 'none',
    paddingBottom: '10px',
    paddingTop: '10px',
    transition: 'border-color 0.3s',
  },

  divBotao: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },

  botao: {
    width: '356px',
    backgroundColor: '#30363D',
    color: '#ffffff',
    padding: '15px 40px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default FormularioDiagnostico;
