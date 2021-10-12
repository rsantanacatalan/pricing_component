import React from 'react';

const ToggleBilling=({id, checked, onChange, optionLabels}) => {
    return(
        <div className="toggle-switch small-switch">
            <input
                type="checkbox"
                className="toggle-switch-checkbox"
                id={id}
                checked={checked}
                onChange={e => onChange(e.target.checked)}
            />
            <label className="toggle-switch-label" htmlFor={id}>
                <span 
                    className="toggle-switch-inner"
                    tabIndex={-1}
                />
                <span className="toggle-switch-switch" tabIndex={-1}/>
            </label>
        </div>
    )
}

ToggleBilling.defaultProps={
    optionLabels: ['yes','No']
}
export default ToggleBilling;