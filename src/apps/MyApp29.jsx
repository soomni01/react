import React from "react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../components/ui/pagination.jsx";
import { HStack } from "@chakra-ui/react";

function MyApp29(props) {
  return (
    <div>
      <h5>pagination</h5>
      <PaginationRoot
        siblingCount={3}
        count={1024}
        pageSize={100}
        variant={"solid"}
      >
        <HStack>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
    </div>
  );
}

export default MyApp29;
