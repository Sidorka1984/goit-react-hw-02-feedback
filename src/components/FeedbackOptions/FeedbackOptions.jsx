import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ option, onLeaveFeedback }) => {
    return (
    <div className={style.btn}>
        {option.map((option) => (
            <button className={style.button}
                key={option}
                type="button"
                name={option}
                onClick={() => onLeaveFeedback(option)}>{option}
            </button>
        ))}
    </div>)
}
FeedbackOptions.propTypes = {
    option: PropTypes.arrayOf(PropTypes.string.isRequired,
    )
}
export default FeedbackOptions;