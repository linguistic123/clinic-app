import Grid from 'antd/es/grid';

const { useBreakpoint } = Grid;
//if supplied breakpoint is true return child elements
function WithBreakPoints(props) {
    
    if (useBreakpoint()[props.size])
        return props.children
    else
        return null
}

export default WithBreakPoints;
