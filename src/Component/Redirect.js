import {useEffect, useState} from 'react'
import { Flex, Text, Heading, useToast } from "@chakra-ui/react";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Redirect(){
    const {pathname, state} = useLocation()
    const toast = useToast() 
    const [appName, setAppName] = useState('')
    useEffect(()=>{
        const pasetoFromStorage = localStorage.getItem('PLATFORM_PASETO')
        if(pasetoFromStorage === null){
            toast({
                title: 'Paseto deesnt exist in storage',
                description: "It seems like user paseto doesnt exist ",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })

        } else {
            const pageHref =new URL('a://' + window.location.hash.replace(/^#/g,"")).search
            const searchParams = new URLSearchParams(pageHref.substring(pageHref.indexOf('?')));
            setAppName(searchParams.get('appBaseUrl'))
            console.log("searchParams",searchParams);
            window.location.href = `${searchParams.get('appBaseUrl')}/?paseto=${pasetoFromStorage}`
        }
    },[])
    return(
        <Flex direction={'column'}  height={'100vh'} width={'100%'} justifyContent={'center'} alignItems={'center'}>
            <Heading>Redirecting to {appName}...</Heading>
            <Text>You are being redirected back to Launchpad please hold on.</Text>
        </Flex>
    )
}
