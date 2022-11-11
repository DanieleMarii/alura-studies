import Botao from "../Botao";
import style from './Formulario.module.scss'

export default function Formulario(){
    return(
        <form className={style.novaTarefa}>
            <div className={style.inputContainer}> 
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar?" required/>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input type="time" step="1" name="tempo" id="tempo" min="00:30:00" max="01:30:00" required/>
            </div>
            <Botao texto="Adicionar"/>
        </form>
    )
}