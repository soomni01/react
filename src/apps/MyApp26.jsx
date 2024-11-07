import React from "react";
import { Button } from "../components/ui/button.jsx";

function MyApp26(props) {
  return (
    <div>
      <Button size="xs">click</Button>
      <Button size="sm">click</Button>
      <Button size="md">click</Button>
      <Button size="lg">click</Button>
      <Button size="xl">click</Button>
      <hr />
      <Button variant="solid">click</Button>
      <Button variant="subtle">click</Button>
      <Button variant="surface">click</Button>
      <Button variant="outline">click</Button>
      <Button variant="ghost">click</Button>
      <Button variant="plain">click</Button>
      <hr />
      <Button loading>click</Button>
      <Button loading={true}>click</Button>
      <Button>click</Button>
      <Button loading={false}>click</Button>
      <hr />
      <Button loading loadingText="업로드중">
        click
      </Button>
      <Button loading={true} loadingText="작업중">
        click
      </Button>
    </div>
  );
}

export default MyApp26;
