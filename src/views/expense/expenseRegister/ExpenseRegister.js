import React, { useEffect, useState } from "react";

import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormGroup,
  CInput,
  CFormText,
  CLabel,
  CButton,
} from "@coreui/react";

const ExpenseRegister = () => {
  const [produto, setProduto] = useState({});
  const [valorProd, setValorProd] = useState({});
  const [despesa, setDespesa] = useState({});

  const handleChange = (e) => {
    const inputField = e.target.id ? e.target.id : e.target.name;
    const { value } = e.target;

    switch (inputField) {
      case "nf-prod":
        setProduto(value);
        break;
      case "nf-valor":
        setValorProd(value);
        break;
      default:
        break;
    }

    console.log(value);
    console.log(inputField);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDespesa({ produto, valorProd });
    localStorage.setItem("despesas", JSON.stringify(despesa));
  };
  console.log(despesa);

  return (
    <>
      <CCard>
        <CCardHeader>Contas à pagar</CCardHeader>
        <CCardBody>
          <CRow>
            <CCol>
              <CForm action="" method="post">
                <CFormGroup>
                  <CLabel htmlFor="nf-prod">Produto/Serviço</CLabel>
                  <CInput
                    onChange={handleChange}
                    type="text"
                    id="nf-prod"
                    name="nf-prod"
                    placeholder="Digite aqui"
                  />
                  <CFormText className="help-block">
                    Digite o nome ou descrição do produto/serviço
                  </CFormText>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-valor">Valor</CLabel>
                  <CInput
                    onChange={handleChange}
                    type="number"
                    id="nf-valor"
                    name="nf-valor"
                    placeholder="R$ ..."
                  />
                  <CFormText className="help-block">
                    Digite o valor total da despesa
                  </CFormText>
                </CFormGroup>
                <CButton className="btn btn-primary" onClick={handleSubmit}>
                  Salvar Despesa
                </CButton>
              </CForm>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default ExpenseRegister;
