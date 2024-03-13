import React, { useState } from "react";
import { Box, Button, useColorMode, useColorModeValue, Heading, FormControl, FormLabel, Input, Textarea, VStack, HStack, IconButton, Container } from "@chakra-ui/react";
import { FaMoon, FaSun, FaUpload } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const [apiKey, setApiKey] = useState("");

  // Placeholder functions for future implementation
  const handleFileImport = () => {
    console.log("Import files");
    // Implement file import logic
  };

  const handleQuestionSubmit = () => {
    console.log("Submit question");
    // Implement question handling logic
  };

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <HStack justifyContent="space-between" width="full">
          <Heading>Inventory & Stock Analysis</Heading>
          <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} aria-label="Toggle color mode" />
        </HStack>
        <Box w="full" bg={formBackground} p={5} borderRadius="md" shadow="md">
          <VStack spacing={5}>
            <FormControl>
              <FormLabel>Import Data Files</FormLabel>
              <Input type="file" multiple onChange={handleFileImport} />
              <Button leftIcon={<FaUpload />} mt={2} onClick={handleFileImport}>
                Upload
              </Button>
            </FormControl>
            <FormControl>
              <FormLabel>Ask a Question</FormLabel>
              <Textarea placeholder="Type your question here..." />
              <Button mt={2} onClick={handleQuestionSubmit}>
                Submit Question
              </Button>
            </FormControl>
            <FormControl>
              <FormLabel>OpenAI API Key</FormLabel>
              <Input type="text" value={apiKey} onChange={handleApiKeyChange} />
            </FormControl>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
