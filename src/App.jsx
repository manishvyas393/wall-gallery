import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ImageGallary from "./components/ImageGallary";
import axios from "axios";
function App() {
  const [images, setImages] = useState()
  const url = "http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0"
  const fetch = async () => {
    const { data } = await axios.get(url)
    setImages(data)
  }
  useEffect(() => {
    fetch()
  }, [])
  return (
    <Flex flexWrap={"wrap"} alignItems="stretch" justifyContent={"space-around"} flexDirection="column" maxHeight={"100vh"}>
      {
        images?.map((img) => (
          <ImageGallary src={img?.urls?.regular} />
        ))
      }

    </Flex>
  );
}

export default App;
