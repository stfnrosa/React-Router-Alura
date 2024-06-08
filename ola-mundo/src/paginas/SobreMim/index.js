import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'
import minhaFoto from 'assets/minha_foto.jpg'


export default function SobreMim(){
    return(
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu me chamo Estefani
            </h3>
            <img
                src={minhaFoto}
                alt="Foto Estefani"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>Após anos escolares dedicados ao estudo das exatas e impulsionada pela curiosidade em compreender o funcionamento do mundo e sua composição, tomei a decisão de seguir o curso técnico em química. No entanto, logo percebi que essa escolha não me transmitia a confiança necessária.</p> 
            <p className={styles.paragrafo}>Após enfrentar algumas dificuldades em encontrar meu espaço na área, durante a pandemia, descobri minha afinidade com setores relacionados à logística.</p> 
            <p className={styles.paragrafo}>Essa fase da minha carreira, me levou a explorar um novo desafio: um curso de lógica de programação.</p>
            <p className={styles.paragrafo}>Hoje na jornada que trilho, cada passo me conheço melhor e vejo claramente o rumo que estou seguindo. Minha curiosidade e dedicação diária me mantêm engajada, e cada pequeno progresso alimenta minha confiança, impulsionando meu desejo de aprender mais.</p>
        </PostModelo>
    )
}