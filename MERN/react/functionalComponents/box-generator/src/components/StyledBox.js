import React from 'react'
import {styled} from 'styletron-react'

const StyledBox = styled('div', props => ({
    backgroundColor: props.$bgColor,
    width: `${props.$size || 200}px`,
    height: `${props.$size || 200}px`
}))

export default StyledBox