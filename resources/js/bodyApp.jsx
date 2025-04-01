import React, {useContext} from 'react';
import {ActivityBlock, BtnToBlock} from './router-divovk';
const BodyApp = function(){

    return (
        <>
            <div style={{width: '100%', height: '100%'}}>
                <div className="main">
                    <BtnToBlock toId={'block1'}>Создать заявку</BtnToBlock>
                    <BtnToBlock toId={'block2'}>Посмотреть заявки</BtnToBlock>
                    <BtnToBlock toId={'block3'}>Список сотрудников</BtnToBlock>
                </div>
                <ActivityBlock id={'block1'}>
                    <h1>Создание заявки</h1>
                    <button onClick={()=>{history.back()}}>Назад</button>
                </ActivityBlock>
                <ActivityBlock id={'block2'}>
                    <h1>Список заявок</h1>
                    <button onClick={()=>{history.back()}}>Назад</button>
                </ActivityBlock>
                <ActivityBlock id={'block3'}>
                    <h1>Список сотрудников</h1>
                    <button onClick={()=>{history.back()}}>Назад</button>
                </ActivityBlock>

            </div>
    </>
    )
}
export default BodyApp;
