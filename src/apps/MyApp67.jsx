import React, { useEffect, useState } from "react";
import axios from "axios";
import { Field } from "../components/ui/field.jsx";
import {
  NumberInputField,
  NumberInputRoot,
} from "../components/ui/number-input.jsx";
import { Box, Input } from "@chakra-ui/react";

function MyApp67(props) {
  const [customerId, setCustomerId] = useState(0);
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get(`/api/main6/sub1/${customerId}`, {
        signal: controller.signal,
      })
      .then((res) => setCustomer(res.data));

    return () => {
      // 현재 요청 취소코드
      controller.abort();
    };
  }, [customerId]);

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

export default MyApp67;
