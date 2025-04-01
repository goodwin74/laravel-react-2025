import React, {useCallback, useEffect} from 'react';
import {DIVOVKProvider} from 'router-divovk'
import BodyApp from "./bodyApp.jsx";
import '../css/app.css';
import bridge from '@vkontakte/vk-bridge';

const Main = () => {
    const initJs = useCallback(() => {
        bridge.send("VKWebAppInit");
    },[]);
    useEffect(() => {
        initJs();
    },[]);

   return (
            <DIVOVKProvider>
                <BodyApp/>
            </DIVOVKProvider>
        )
}

export default Main;
