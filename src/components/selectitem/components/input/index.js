import React, { lazy, memo, Suspense, useCallback, useEffect, useState } from 'react'
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
        <Suspense fallback={<div>Loading...</div>}>
            <Input
                name={name}
                id={String(id)} // <-- Convert id to string
                onChange={handleChange}
                value={selectvalue}
            />
        </Suspense>
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