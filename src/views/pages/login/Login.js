import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
  CAlert,
  CToaster,
  CToast,
  CToastBody,
  CToastHeader,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [createToaster, setCreateToaster] = useState(false);

  const handleLogin = () => {
    if (username === "Ricardo" && password === "123456") {
      return history.push("/dashboard");
    }
    setUsername("");
    setPassword("");
    setCreateToaster(true);
  };

  const handleChange = (e) => {
    setCreateToaster(false);
    const { value, name } = e.target;
    console.log(value, name);
    switch (name) {
      case "username":
        setUsername(value);
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
                      <CToastBody>Login ou senha incorretos</CToastBody>
                    </CToast>
                  </CToaster>
                )}
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Acesse sua conta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        value={username}
                        name="username"
                        onChange={handleChange}
                        type="text"
                        placeholder="Usuário"
                        autoComplete="username"
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
                          onClick={handleLogin}
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
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
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
