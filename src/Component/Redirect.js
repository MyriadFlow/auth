import {useEffect} from 'react'
import { Flex, Text, Heading, useToast } from "@chakra-ui/react";

export default function Redirect(){
    
    const toast = useToast() 
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

        } else{
            window.location.href = `http://launchpad.myriadflow.com/launchpad?paseto=${pasetoFromStorage}`
        }
    })
    return(
        <Flex direction={'column'}  height={'100vh'} width={'100%'} justifyContent={'center'} alignItems={'center'}>
            <Heading>Redirecting...</Heading>
            <Text>You are being redirected back to Launchpad please hold on.</Text>
        </Flex>
    )
}
