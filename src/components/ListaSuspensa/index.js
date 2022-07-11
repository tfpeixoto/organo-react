import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

  const aoMudar = (e) => {
    props.aoSalvar(e.target.value)
  }
  return (
    <div className='lista-suspensa'>
      <label>{props.label}</label>
      <select required={props.obrigatorio} value={props.value} onChange={aoMudar}>
        <option value=''></option>
        {props.itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default ListaSuspensa