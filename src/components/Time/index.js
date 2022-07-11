import './Time.css'
import Colaborador from '../Colaborador'

const Time = (props) => {
  const borderColor = { borderColor: props.corSecundaria }

  return (
    // ou ternário COND ? EXIBE : ''
    (props.colaboradores.length > 0) && <section className='time' style={{ backgroundColor: props.corPrimaria }}>
      <h3 style={borderColor}>{props.time}</h3>

      <div className='colaboradores'>
        {props.colaboradores.map(colaborador => <Colaborador
          key={colaborador.nome}
          nome={colaborador.nome}
          cargo={colaborador.cargo}
          imagem={colaborador.imagem}
          corCabecalho={props.corSecundaria}
        />)}
      </div>
    </section>
  )
}

export default Time