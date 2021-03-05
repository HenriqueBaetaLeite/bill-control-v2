import React, { useEffect, useState, createRef } from "react";

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

const IncomeRegister = () => {
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
  };
  console.log(despesa);

  return (
    <>
      <CCard>
        <CCardHeader>Receitas</CCardHeader>
        <CCardBody>
          <CRow>
            <CCol>
              <CForm action="" method="post">
                <CFormGroup>
                  <CLabel htmlFor="nf-prod">Origem</CLabel>
                  <CInput
                    onChange={handleChange}
                    type="text"
                    id="nf-prod"
                    name="nf-prod"
                    placeholder="Digite aqui"
                  />
                  {/* <CFormText className="help-block">Digite o nome</CFormText> */}
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
                  {/* <CFormText className="help-block">Digite o valor</CFormText> */}
                  <CButton onClick={handleSubmit}>Salvar Receita</CButton>
                </CFormGroup>
              </CForm>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default IncomeRegister;
