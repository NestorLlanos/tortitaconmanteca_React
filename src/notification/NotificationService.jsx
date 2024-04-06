import {createContext,useState } from "react";
import Notification from "./Notification";

export const NotificationContext = createContext()

export const NotificationProvider = ({Children}) =>{
    const [notificationData, setNotificationData]= useState({
        type: 'success',
        text: ''
    })

    const showNotification =(type, text) =>{
        setNotificationData({type,text})
        setTemeout(()=>{
            setNotificationData (prev => ({...prev,text:''}))
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{showNotification}}>
            {notificationData.text &&<Notification notificacionData={notificacionData}/>}
            {Children}
        </NotificationContext.Provider>
    )

}

