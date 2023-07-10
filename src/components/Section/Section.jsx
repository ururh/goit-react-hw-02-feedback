import { Wrap, Title } from "./Section.module"
import PropTypes from 'prop-types';
const Section = ({ title, children }) => {
    return (<Wrap>
        <Title>{title}</Title>
        {children}
    </Wrap>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Section