import {DAppProvider} from "@usedapp/core";
import {ChakraProvider} from "@chakra-ui/react";
import {Flex, Text, Button, Stack} from "@chakra-ui/react";
import {useEthers} from "@usedapp/core";

export default function Home() {
  const ConnectWalletButton = () => {
    const {account, activateBrowserWallet} = useEthers();

    return (
        <Stack spacing={3} align='center'>
          {account ? (
              <Text color='white'>
                Hello, {account}!
              </Text>
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
