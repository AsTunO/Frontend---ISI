import './reportsPage.css'
import Header from '../../components/Header/header.jsx' 

function reportsPage(){
    return (
        <div className="reports-page">
          <Header />
          <span className='reports-page-title'>Relatórios <br /></span>
          <div className='container'>
            <select className='select-box'>
                <option value="taxaAprovacaoDisciplina">Taxa de Aprovação por Disciplina	</option>
                <option value="otherOption">Taxa de Reprovação por Disciplina</option>
                <option value="otherOption">Taxa de Desistência por Disciplina</option>
                <option value="otherOption">Média de Notas por Disciplina</option>
                <option value="otherOption">Taxa de Conclusão por Aluno</option>
                <option value="otherOption">Taxa de Desempenho do Professor	</option>
                <option value="otherOption">Número Médio de Disciplinas por Aluno</option>
                <option value="otherOption">Distribuição de Notas por Disciplina</option>
                <option value="otherOption">Taxa de Retenção de Alunos por disciplina</option>
                <option value="otherOption">Carga Horária Média por Disciplina</option>
                <option value="otherOption">Taxa de Graduação</option>
                <option value="otherOption">Taxa de Desistência</option>
                <option value="otherOption">Taxa de Sucesso por Ano/Período</option>
                <option value="otherOption">Tempo Médio para Graduação</option>
                <option value="otherOption">Desempenho Acadêmico Geral dos Alunos</option>
                <option value="otherOption">Distribuição de Notas dos Alunos</option>
                <option value="otherOption">Taxa de Aprovação nas Disciplinas por Professor</option>
                <option value="otherOption">Avaliação Média do Professor</option>
                <option value="otherOption">Carga Horária do Professor</option>
                <option value="otherOption">Média de Créditos por Disciplina</option>
                <option value="otherOption">Taxa de Aprovação Global</option>
                <option value="otherOption">Taxa de Retenção por Curso</option>
                <option value="otherOption">Taxa de Evolução Acadêmica</option>
                <option value="otherOption">Taxa de Aproveitamento de Créditos</option>
                <option value="otherOption">Taxa de Frequência nas Disciplinas</option>
                <option value="otherOption">Índice de Dificuldade das Disciplinas</option>
                <option value="otherOption">Disciplinas que mais reprovam por nota/falta</option>
                <option value="otherOption">Mostrar aluno matriculados atualmente</option>
                <option value="otherOption">Mostrar média de alunos por componentes curricular</option>
                <option value="otherOption">Número de disciplinas por professor</option>

            </select>
          </div>
        </div>
      )
}

export default reportsPage