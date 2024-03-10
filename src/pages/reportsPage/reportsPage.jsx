
import { React, useState } from 'react';
import Select from "react-select";


import './reportsPage.css'
import Header from '../../components/Header/header.jsx'
import Sidebar from '../../components/Sidebar/sidebar.jsx'

function reportsPage() {

  const [selected, setSelected] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // Adiciona estado para armazenar a categoria selecionada

  function handleSubmit(e) {
    e.preventDefault();
    alert(selected);
  }

  function onSelectChange(e) {
    setSelected(e.value);
  }

  function handleCategoryClick(category) {
    setSelectedCategory(category);
  }

  const categories = ['Estudante', 'Historico', 'Professor', 'Disciplina'];

  const opStudent = [{ label: 'Disciplinas obrigatórias cursadas por um aluno', value: ['disObg', 'disObg', 'disObg'] },
  { label: 'Taxa de Aprovação por Disciplina', value: ['disObg', 'disObg', 'disObg'] },
  { label: 'Taxa de Reprovação por Disciplina', value: ['disObg', 'disObg', 'disObg'] }
  ]
  const opHistoric = [{ label: 'Taxa de Desistência por Disciplina', value: ['disObg', 'disObg', 'disObg'] },
  { label: 'Média de Notas por Disciplina', value: ['disObg', 'disObg', 'disObg'] },
  { label: 'Taxa de Conclusão por Aluno', value: ['disObg', 'disObg', 'disObg'] }]

  const opProfessor = [{ label: 'Taxa de Desempenho do Professor', value: ['disObg', 'disObg', 'disObg'] },
  { label: 'Número Médio de Disciplinas por Aluno', value: ['disObg', 'disObg', 'disObg'] }]

  const opDisciplina = [{ label: 'Distribuição de Notas por Disciplina', value: ['disObg', 'disObg', 'disObg'] },
  { label: 'Taxa de Retenção de Alunos por disciplina', value: ['disObg', 'disObg', 'disObg'] }]

  const selectBoxStyles = {
    container: (provided, state) => ({
      ...provided,
      width: 500,
      borderColor: state.isFocused ? '#AE3C33' : '#AE3C33',

    }),
    control: (provided, state) => ({
      ...provided,
      borderRadius: 50,
      borderColor: "#AE3C33"

      // borderColor: state.isFocused ? '#AE3C33': '#AE3C33',    
    }),
    menu: (provided, state) => ({
      ...provided,
      borderColor: '#AE3C33',
    })
  }



  return (
    <div className="reports-page">
      <Header title="Relatórios" />
      <Sidebar />
      <div id="ResultContainer">
        <div>
          <div id="PrevSeachField" >
          <div id="blocks">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`ButtonType ${selectedCategory === category ? 'clicked' : ''}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className='form-report'>
              <Select className='select-box'
                onChange={onSelectChange}
                value={selected.label}
                styles={selectBoxStyles}
                placeholder="Selecione o relatório a ser acessado"
                options={selectedCategory === "Estudante" ? opStudent : selectedCategory === "Historico" ? opHistoric : selectedCategory === "Professor" ? opProfessor : opDisciplina}
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary: "#AE3C33"
                  }
                })}
              />
            </form>
          </div>
        </div>
        <div className='result-panel'>Selecione algum relatório</div>
      </div>
    </div>
  )
}

export default reportsPage
