import React from "react";
import { useState } from "react";
import Modal from "react-awesome-modal";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import "./TopBar.css";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useForm } from "react-hook-form";
import { FormGroup } from "../FormGroup/FormGroup.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

function Topbar() {
  const classes = useStyles();
  const {
    register,

    formState: { errors },
  } = useForm();


  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginData, setLogin] = useState({
    login: "",
    passwordLogin: "",
  });
  
  const { login, passwordLogin } = loginData;

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [state, setState] = useState(false);
  function openModal() {
    setState(true);
  }
  function closeModal() {
    setState(false);
  }

  const [state2, setState2] = useState(false);
  function openModal2() {
    setState2(true);
  }
  function closeModal2() {
    setState2(false);
  }

  return (
    <div className="topbar-one">
      <div className="container">
        <div className="topbar-one__left">
          <a href="#none">needhelp@kipso.com</a>
          <a href="#none">444 888 0000</a>
        </div>
        <div className="topbar-one__right">
          <a href="#" onClick={openModal2}>
            Login
          </a>
          <a href="#none" onClick={openModal}>
            Register
          </a>
        </div>
      </div>
      <section>
        <Modal
          visible={state}
          width="400"
          height="570"
          effect="fadeInDown"
          onClickAway={closeModal}
        >
          <div className="modal-div">
            <div className="Rbtn-div">
              <Link className="Rbtn RbtnK">Ro'yhattan o'tish</Link>
            </div>

            <form noValidate={true}>
              <FormGroup
                label="you Name"
                id={"name"}
                register={register("name", {
                  required: {
                    value: true,
                    message: "Iltimos ismingizni kiriting",
                  },
                })}
                error={errors?.name}
                className="text-fild-name"
              />
              <FormGroup
                id={"email"}
                label="email@gmail.com"
                type="text"
                className="text-fild-name"
                register={register("email", {
                  required: {
                    value: true,
                    message: "Iltimos emailni kiriting",
                  },
                })}
                error={errors?.email}
              />

              <div className="div-password">
                <FormGroup
                  type={"password"}
                  id="password"
                  register={register("password", {
                    required: {
                      value: true,
                      message: "Iltimos parolni kiriting",
                    },
                  })}
                  error={errors?.password}
                />
              </div>
              <div className="div-border">
                <button type="submit" className="Fkirish">
                  Ro'yhatdan o'tish
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </section>

      <div>
        <section>
          <Modal
            visible={state2}
            width="400"
            height="400"
            effect="fadeInDown"
            onClickAway={closeModal2}
          >
            <div className="row Rrow">
              <div className="col-md-12 Rbox">
                <div className="asa">
                  <div className="Rbtn-div">
                    <Link className="Rbtn RbtnK">Kirish</Link>
                  </div>
                  <form
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      className="Iname"
                      id="standard-basic"
                      label="User name"
                      name="loginName"
                      value={login}
                      onChange={(e) =>
                        setLogin({ ...loginData, login: e.target.value })
                      }
                    />
                    <div>
                      <div>
                        <div>
                          <FormControl
                            className={
                              (clsx(classes.margin, classes.textField),
                              "password")
                            }
                          >
                            <InputLabel htmlFor="standard-adornment-password">
                              Password
                            </InputLabel>
                            <Input
                              name="loginPassword"
                              id="standard-adornment-password"
                              type={values.showPassword ? "text" : "password"}
                              value={passwordLogin}
                              onChange={(e) =>
                                setLogin({
                                  ...loginData,
                                  passwordLogin: e.target.value,
                                })
                              }
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    className="passs"
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                  >
                                    {values.showPassword ? (
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                            />
                          </FormControl>
                        </div>
                      </div>
                    </div>
                    <div className="div-border">
                      <div className="reset-P">
                        <button className="Hparol" type="button">
                          parolni unutdim
                        </button>
                      </div>
                      <button className="Fkirish">Kirish</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Modal>
        </section>
      </div>
      
    </div>
  );
}

export default Topbar;


