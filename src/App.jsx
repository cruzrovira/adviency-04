import {Flex, VStack, Button, Input, Heading, Text} from "@chakra-ui/react"
import {useState, useEffect} from "react"
import {v4 as uuidv4} from "uuid"

const initRegalos = [
  {id: uuidv4(), name: "Medias "},
  {id: uuidv4(), name: "caramelos"},
  {id: uuidv4(), name: "Vitel Tone"},
]

function App() {
  const [regalos, setRegalos] = useState(undefined)
  const [regalo, setRegalo] = useState("")

  useEffect(() => {
    setRegalos(initRegalos)
  }, [])

  const handlerSubmit = (e) => {
    e.preventDefault()
    if (regalo.trim() !== "") {
      setRegalos([...regalos, {id: uuidv4(), name: regalo}])
    }
    setRegalo("")
  }
  const handlerDelete = (id) => {
    setRegalos(regalos.filter((regalo) => regalo.id !== id))
  }

  return (
    <Flex alignItems="center" justifyContent="center" minH="100vh" w="100%">
      <VStack alignItems="flex-start" background="white" boxShadow="md" p={4} w="30%">
        <Heading fontFamily="'Mountains of Christmas'" textAlign="center" w="100%">
          Regalos:
        </Heading>
        <Flex as="form" gap={2} onSubmit={handlerSubmit}>
          <Input placeholder="Regalos" value={regalo} onChange={(e) => setRegalo(e.target.value)} />
          <Button colorScheme="red" type="submit">
            Agregar
          </Button>
        </Flex>
        {regalos && (
          <VStack w="100%">
            {regalos.map((regalo) => (
              <Flex key={regalo.id} justifyContent="space-between" w="100%">
                <Text>{regalo.name}</Text>
                <Button colorScheme="red" size="xs" onClick={() => handlerDelete(regalo.id)}>
                  x
                </Button>
              </Flex>
            ))}
          </VStack>
        )}
      </VStack>
    </Flex>
  )
}

export default App
