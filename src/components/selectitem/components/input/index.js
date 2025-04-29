import React, { lazy, memo, useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const Input = lazy(() => import('./input'))

const MainInput = ({ name, id, onChange }) => {
    const data = useSelector((state) => state.Section[id])
    const [selectvalue, setSelectvalue] = useState(data?.[name] ?? null)

    useEffect(() => {
        console.log(data && data[name])
        setSelectvalue(data?.[name] ?? null)
    }, [data, name])

    const handleChange = useCallback(
        (e) => {
            onChange(e, e.target.value)
            setSelectvalue(e.target.value)
        },
        [onChange]
    )

    return (
        <div>
            <Input
                name={name}
                id={String(id)} // <-- Convert id to string
                onChange={handleChange}
                value={selectvalue}
            />
        </div>
    )
}

MainInput.propTypes = {
    name: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    onChange: PropTypes.func,
}

export default memo(MainInput)