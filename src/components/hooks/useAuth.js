
import React, { useEffect, useState } from 'react'
import { auth } from '../../config/Firebase'


export default function useAuth() {
    const [user ,setUser]=useState(null)

    useEffect(()=>{
        const unsub=onAuthStateChanged(auth,user=>{ 
            if(user){
                setUser(user)
            } else { 
                setUser(null)
            }
        })

        return unsub
    })
  return {user}
}
