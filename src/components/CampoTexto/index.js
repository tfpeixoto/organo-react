import './CampoTexto.css'

const CampoTexto = (props) => {

  const placeholderModificaca = `${props.placeholder}...`

  const aoDigitar = (e) => {
    props.aoSalvar(e.target.value)
  }

  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input onChange={aoDigitar} value={props.value} type='text' required={props.obrigatorio} placeholder={placeholderModificaca} />
    </div>
  )
}

export default CampoTexto