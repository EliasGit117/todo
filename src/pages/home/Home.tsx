import React from 'react';
import {ActionIcon, Container, Title} from '@mantine/core';

const Home = () => {

  return (
    <Container style={{ marginTop: "64px "}}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Title order={1} style={{ color: "white" }}>TO DO</Title>

        <ActionIcon size="xl">
          Dark Mode
        </ActionIcon>
      </div>
    </Container>
  );
}

export default Home;