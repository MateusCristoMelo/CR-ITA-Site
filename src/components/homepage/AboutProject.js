import styles from "./AboutProject.module.css"

function AboutProject(props){
    return (
        <div className={styles.AboutProjectContainer}>

            <div className={styles.AboutProjectTitle}>
                Nome: {props.nome} 
            </div>

            <div className={styles.BasicInfosEng}>
                Curso: {props.curso}
            </div>

            <div className={styles.BasicInfosPDF}>
                Boletim: {props.pdf}
            </div>

        </div>
        )
}

export default AboutProject