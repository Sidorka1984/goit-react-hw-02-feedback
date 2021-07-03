import PropType from 'prop-types';
import style from './Section';
const Section = ({ title, children }) => (
    <section>
        <h1 className={style.title}>{title}
        </h1>
        {children}

    </section>
)
Section.propType = {
    title: PropType.string.isRequired,
}
export default Section