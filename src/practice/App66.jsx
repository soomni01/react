import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import {
  NumberInputField,
  NumberInputRoot,
} from "../components/ui/number-input.jsx";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";
import { Box, Input } from "@chakra-ui/react";

function MyApp67(props) {
  const [supplier, setSupplier] = useState(null);
  const [supplierId, setSupplierId] = useState(0);

  function handleButtonClick() {
    axios
      .get(`/api/main6/sub2/${supplierId}`)
      .then((res) => setSupplier(res.data));
  }

  return (
    <div>
      <Field label={"공급자번호"}>
        <NumberInputRoot
          value={supplierId}
          onValueChange={(e) => setSupplierId(e.value)}
        >
          <NumberInputField />
        </NumberInputRoot>
      </Field>
      <Button onClick={handleButtonClick}>조회</Button>
      <hr />
      <SupplierView supplier={supplier} />
    </div>
  );
}
function SupplierView({ supplier }) {
  if (!supplier) {
    return <Box>조회된 정보가 없습니다.</Box>;
  }
  return (
    <Box>
      <Field label={"Id"} readOnly>
        <Input value={supplier.id} />
      </Field>
      <Field label={"name"} readOnly>
        <Input value={supplier.name} />
      </Field>
      <Field label={"contact"} readOnly>
        <Input value={supplier.contact} />
      </Field>
      <Field label={"address"} readOnly>
        <Input value={supplier.address} />
      </Field>
      <Field label={"city"} readOnly>
        <Input value={supplier.city} />
      </Field>
      <Field label={"postalCode"} readOnly>
        <Input value={supplier.postalCode} />
      </Field>
      <Field label={"country"} readOnly>
        <Input value={supplier.country} />
      </Field>
      <Field label={"phone"} readOnly>
        <Input value={supplier.phone} />
      </Field>
    </Box>
  );
}

export default MyApp67;
