import {DAppProvider, useLookupAddress} from "@usedapp/core";
import {ChakraProvider} from "@chakra-ui/react";
import {Flex, Text, Button, Stack} from "@chakra-ui/react";
import {useEthers} from "@usedapp/core";
import { useEffect } from 'react';
import Davatar from '@davatar/react'

export default function Home() {
  const ConnectWalletButton = () => {
    const {account, activateBrowserWallet } = useEthers();
    const ens = useLookupAddress()

    return (
        <Stack spacing={3} align='center'>
          {account ? (
            <>
              <Davatar
                size={60}
                address={account}
                generatedAvatarType='jazzicon'
              />
              <Text color='white'>
                Hello, {ens || account}!
              </Text>
            </>
          ) : (
              <Button size='lg' onClick={()=>activateBrowserWallet()}>
                Connect Wallet
              </Button>
          )}
        </Stack>
    )
  }

  return (
      <DAppProvider config={{}}>
        <ChakraProvider>
          <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="100vh"
              bg="blue.900"
          >
            <ConnectWalletButton/>
          </Flex>
        </ChakraProvider>
      </DAppProvider>
  )
}
