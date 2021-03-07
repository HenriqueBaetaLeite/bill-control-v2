import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CToaster,
  CToast,
  CToastBody,
  CToastHeader,
  CSpinner,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

import { auth, addUser } from "src/utils-service/firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createToaster, setCreateToaster] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msgError, setMsgError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    setCreateToaster(false);

    const isEmailValid = email.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/i);

    if (email === "" || password === "") {
      setCreateToaster(true);
      return setMsgError("Todos os campos deve ser preenchidos.");
    }
    if (!isEmailValid) {
      setCreateToaster(true);
      return setMsgError("E-mail foi digitado num formato inválido.");
    }

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);

      localStorage.setItem("userLogged", result.user.email);

      setLoading(true);
      setTimeout(() => {
        return history.push("/dashboard");
      }, 3000);
    } catch (err) {
      console.log("catch", err.message);
      setMsgError(err.message);

      setCreateToaster(true);
    }
  };

  const handleChange = (e) => {
    setCreateToaster(false);
    const { value, name } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      default:
        setPassword(value);
        break;
    }
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                {loading && (
                  <CSpinner
                    className="mx-auto"
                    color="success"
                    style={{ width: "3rem", height: "3rem" }}
                  />
                )}
                {createToaster && (
                  <CToaster position="top-center">
                    <CToast
                      key={1.2}
                      show={true}
                      autohide={6000}
                      fade={true}
                      color="danger"
                    >
                      <CToastHeader>Erro</CToastHeader>
                      <CToastBody>{msgError}</CToastBody>
                    </CToast>
                  </CToaster>
                )}
                <CCardBody>
                  <CForm onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <p className="text-muted">Acesse sua conta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        autoFocus
                        value={email}
                        name="email"
                        onChange={handleChange}
                        type="text"
                        placeholder="E-mail"
                        autoComplete="email"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        value={password}
                        name="password"
                        onChange={handleChange}
                        type="password"
                        placeholder="Senha"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          type="submit"
                          // onClick={handleLogin}
                          color="primary"
                          className="px-4"
                        >
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Controle de Finanças Pessoais</h2>
                    <p>
                      Tenha total controle sobre suas finanças. Visualização em
                      gráficos e tabelas, você decide.
                    </p>
                    {/* <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link> */}
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
