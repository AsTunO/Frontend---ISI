
import { useEffect, useState } from 'react';
import Select from "react-select";
import { Space, Table } from "antd";

import './reportsPage.css'
import Header from '../../components/Header/header.jsx'
import Sidebar from '../../components/Sidebar/sidebar.jsx'
import Footer from '../../components/Footer/footer.jsx'

import axios from 'axios';

function ReportsPage() {

  const [selected, setSelected] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // Adiciona estado para armazenar a categoria selecionada
  const [query, setQuery] = useState('');
  const [columns, setColumns] = useState([]);
  const [dataSource, setDataSource] = useState([]);

  const jason = {
    "fail_rate": 18.391787852865697,
    "failed_students": 215,
    "subject_id": 5,
    "total_students": 1169,
    "subjects": [
      {
          "Performance rate": 0.7356076759061834,
          "Total students approved": 690,
          "Total students reproved": 248,
          "discipline_id": 19,
          "discipline_name": "Estrategias de Comunicacao"
      },
      {
          "Performance rate": 0.8888888888888888,
          "Total students approved": 16,
          "Total students reproved": 2,
          "discipline_id": 78,
          "discipline_name": "Design de Embalagens"
      }
    ]
  };

  useEffect(() => {
    const list = [jason]; // Coloque o objeto jason dentro de um array
    const firstObject = list[0] || {};
    const cols = [];
    for (const key in firstObject) {
      var render = (value) => {
        return <span>{String(value)}</span>;
      };
      if (typeof firstObject[key] === 'object') {
        if (Array.isArray(firstObject[key])) {
          render = (value) => {
            return (
              <span>
                {value.map((item, index) => (
                  <div key={index}>
                    {Object.keys(item).map((key) => (
                      <span key={key}>
                        {key}: {item[key]}<br />
                      </span>
                    ))}
                  </div>
                ))}
              </span>
            );
          };
        } else {
          render = (value) => {
            return (
              <span>
                {Object.keys(value).map((key) => (
                  <span key={key}>
                    {key}: {value[key]}<br />
                  </span>
                ))}
              </span>
            );
          };
        }
      }
      const col = {
        title: key,
        dataIndex: key,
        render: render,
      };
      cols.push(col);
    }
    setColumns(cols);
    setDataSource(list);
  }, [selected]);
  
    

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

  const [selectedButton, setSelectedButton] = useState(null);

  const categories = ['Estudante', 'Historico', 'Professor', 'Disciplina'];

  const opStudent = [
    { label: 'Disciplinas obrigatórias cursadas por um aluno', value: 'quotes' },
    { label: 'Disciplinas que um aluno precisa cursar', value: 'disciplinas_pendentes' },
    { label: 'Alunos matriculados atualmente', value: 'alunos_matriculados_atualmente' },
    { label: 'Monitorar o número de reprovações por aluno', value: 'numero_reprovacoes_por_aluno' },
    { label: 'Quantidade de disciplinas eletivas cursadas por um aluno', value: 'disciplinas_eletivas_cursadas' },
    { label: 'Número Médio de Disciplinas por Aluno', value: 'numero_medio_disciplinas_aluno' },
  ];
  
  const opHistoric = [
    { label: 'Taxa de Aprovação por Disciplina', value: 'taxa_aprovacao_por_disciplina' },
    { label: 'Taxa de Reprovação por Disciplina', value: 'taxa_reprovacao_por_disciplina' },
    { label: 'Taxa de Desistência por Disciplina', value: 'taxa_desistencia_por_disciplina' },
    { label: 'Média de Notas por Disciplina', value: 'media_notas_por_disciplina' },
    { label: 'Taxa de Conclusão por Aluno', value: 'taxa_conclusao_por_aluno' },
    { label: 'Alunos com desistências recorrentes', value: 'alunos_desistentes_recorrentes' },
    { label: 'Número de reprovações por aluno', value: 'numero_reprovacoes_por_aluno' },
    { label: 'Número de reprovações por disciplina', value: 'numero_reprovacoes_por_disciplina' }
  ];
  
  const opProfessor = [
    { label: 'Taxa de Desempenho do Professor', value: 'taxa_desempenho_professor' },
    { label: 'Número de disciplinas por professor', value: 'numero_disciplinas_por_professor' },
    { label: 'Relação "Argumentação de classificação no processo seletivo" vs. Desempenho nas disciplinas', value: 'relacao_argumentacao_vs_desempenho' }
  ];
  
  const opDisciplina = [
    { label: 'Disciplinas que mais reprovam por nota/falta', value: 'disciplinas_mais_reprovam' },
    { label: 'Monitorar o número de reprovações por disciplina', value: 'numero_reprovacoes_por_disciplina' },
    { label: 'Distribuição de Notas por Disciplina', value: 'distribuicao_notas_por_disciplina' },
    { label: 'Taxa de Retenção de Alunos por disciplina', value: 'taxa_retencao_alunos_por_disciplina' },
    { label: 'Carga Horária Média por Disciplina', value: 'carga_horaria_media_por_disciplina' },
    { label: 'Índice de Dificuldade das Disciplinas', value: 'indice_dificuldade_disciplinas' }
  ];
  

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
        <div className='result-panel'>
          {/* <div id='divPesquisa'>
            <input type="text" id='pesquisa' placeholder='Pesquisar'/>
            <button id='botaoPesquisa'></button>
          </div> */}
          <Table columns={columns} dataSource={dataSource} id='tabela' ></Table>
        
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ReportsPage;
