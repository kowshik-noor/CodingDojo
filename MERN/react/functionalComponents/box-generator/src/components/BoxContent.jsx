import React from 'react'
import styles from './BoxContent.module.css'
import StyledBox from './StyledBox'

const BoxContent = (props) => {
    return (
        <div id={styles.boxHolder}>
            {
                props.boxes.map((b, i) =>
                    <StyledBox key={i} $bgColor={b.color} $size={b.size}></StyledBox>
                )
            }
        </div>
    )
}

export default BoxContent
