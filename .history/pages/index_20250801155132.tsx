import { Button, Group } from "@mantine/core";
import Navbar from "../components/Navbar";

export default function IndexPage() {
  return (
    <>
      <Group mt={50} justify="center">
        <Button size="xl">Welcome to Mantine!</Button>
        <Navbar />
      </Group>
    </>
  );
}
