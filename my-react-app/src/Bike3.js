//Props example
import styles from './css/my-style.module.css';

function Bike3(props) {
     return <h2 className={styles.bigblue}>I am a { props.brand.model } Bike! My brand is { props.brand.name }, and my color is { props.brand.color }</h2>
}

export default Bike3;