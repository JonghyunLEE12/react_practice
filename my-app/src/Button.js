import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}){
    // Button.module.css 생성후 클래스 이름으로 스타일 설정
    // Button.module.css 을 import 후 className 이름 설정
    return <button className={styles.btn}>{text}</button>
}

Button.propTypes  = {
    text : PropTypes.string.isRequired,
}

export default Button