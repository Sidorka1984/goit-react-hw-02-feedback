import PropType from 'prop-types';
import style from './Notification.module.css';
const Notification = ({ message }) => <p className={style.title}>{message}</p>;

Notification.propType = {
    message:PropType.string.isRequired,
}
export default Notification;
