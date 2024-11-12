import React, { useState } from "react";
import {
  NumberInputField,
  NumberInputRoot,
} from "../components/ui/number-input.jsx";
import { Field } from "../components/ui/field.jsx";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";
import { Box, Input } from "@chakra-ui/react";

function MyApp66(props) {
  const [customerId, setCustomerId] = useState(0);
  const [customer, setCustomer] = useState(null);

  const handleButtonClick = () => {
    axios
      .get(`/api/main6/sub1/${customerId}`)
      .then((res) => setCustomer(res.data));
  };
  return (
    <div>
      <Field label={"고객번호"}>
        <NumberInputRoot
          value={customerId}
          onValueChange={(e) => setCustomerId(e.value)}
        >
          <NumberInputField />
        </NumberInputRoot>
      </Field>
      <Button onClick={handleButtonClick}>조회</Button>
      <hr />
      <CustomerView customer={customer} />
    </div>
  );
}
function CustomerView({ customer }) {
  if (!customer) {
    return (
      <Box>
        <p>조회된 고객이 없습니다.</p>
      </Box>
    );
  }

  return (
    <Box>
      <Field label={"ID"} readOnly>
        <Input value={customer.id} />
      </Field>
      <Field label={"이름"} readOnly>
        <Input value={customer.name} />
      </Field>
      <Field label={"계약명"} readOnly>
        <Input value={customer.contact} />
      </Field>
      <Field label={"주소"} readOnly>
        <Input value={customer.address} />
      </Field>
      <Field label={"도시"} readOnly>
        <Input value={customer.city} />
      </Field>
      <Field label={"우편번호"} readOnly>
        <Input value={customer.postalCode} />
      </Field>
      <Field label={"국가"} readOnly>
        <Input value={customer.country} />
      </Field>
    </Box>
  );
}

export default MyApp66;
