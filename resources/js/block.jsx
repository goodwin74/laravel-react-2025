import React from 'react';

const Block = ({id,children, activityStyle, activityContStyle}) => {

    return (
        <>
            <div id={id} className={`activity`} style={activityStyle}>
                <div className={`activityCont`} style={activityContStyle}>
                    <h2>Блок {id}</h2>
                    <button onClick={() => history.go(-1)}>Назад</button>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Block
