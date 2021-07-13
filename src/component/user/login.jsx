/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-nested-ternary */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import classnames from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress'
import _ from 'lodash'
import { connect } from 'react-redux'
import styles from './CSS/loginStyle'
import bgImage from './CSS/login-background.jpg'
import './CSS/styles.css'
import {
  validateEmail,
  validatePassword,
  validateUser,
  validateConfirmPassword,
  validatePhone,
} from './component/validition.js'
import closeIcon from './CSS/closeIcon.png'
import InputPhone from './InputPhone'
import HeaderSelect from './HeaderLogin'

class Login extends Component {
  constructor(props) {
    super(props)
    const { location, history } = props
   
    this.state = {
      email: '',
      password: '',
      userName: '',
      confirmPassword: '',
      errorPassword: undefined,
      errorEmail: undefined,
      errorUser: undefined,
      errorConfirmPassword: undefined,
      errorPhone: undefined,
      errorText: null,
      isSignUp: false,
      phone: '',
      isEmail: false,
      confirmResult: null,
      regionSelected: { name: 'Viet Nam', dial_code: '+84', code: 'VN' },
    }
  }

  componentDidMount() {
    const { history } = this.props
  }

  /**
   * handle change form data
   */
  onChangeFormData = event => {
    const { value, name } = event.target
    const { password } = this.state
    this.setState({
      errorText: null,
      errorConfirmPassword: null,
    })
    if (name === 'email' && !_.isUndefined(value)) {
      if (value.length > 100) return
      this.setState({ email: value, errorEmail: validateEmail(value) })
    }
    if (name === 'password' && !_.isUndefined(value)) {
     
      this.setState({
        password: value,
        errorPassword: validatePassword(value),
      })
    }
    if (name === 'userName' && !_.isUndefined(value)) {
      this.setState({
        userName: value,
        errorUser: validateUser(value),
      })
    }
    if (name === 'confirmPassword' && !_.isUndefined(value)) {
      this.setState({
        confirmPassword: value,
        errorConfirmPassword: validateConfirmPassword(
          value,
          password
        ),
      })
    }
  }

  onChangePhoneNumber = (value) => {
    this.setState({
      phone: value,
      errorPhone: validatePhone(value),
      errorText: null,
    })
  }

  /**
   * Handle press key
   */
  handlePressKey = ev => {
    if (ev.key === 'Enter') {
      ev.preventDefault()
      this.onSubmitForm()
    }
  }
  goBack=()=>{
    // history.push('/checkout')
    return
  }

  /**
   * Handle submit form data
   */
  onSubmitForm = async () => {
    try {
      const {
        email,
        password,
        userName,
        confirmPassword,
        errorEmail,
        errorUser,
        errorPassword,
        errorConfirmPassword,
        isSignUp,
        isEmail,
        phone,
        errorPhone,
        errorText,
      } = this.state
      const required = isEmail ? email === '' : phone === ''
      if (
        required ||
        password === '' ||
        (userName === '' && isSignUp) ||
        (confirmPassword === '' && isSignUp)
      ) {
        this.setState({
          errorText: 'Hãy điền đầy đủ thông tin cho tất cả các mục.',
        })
        return
      }

      const error = isEmail ? errorEmail : errorPhone

      if (isSignUp && validateConfirmPassword(password, confirmPassword)) {
        this.setState({
          errorConfirmPassword: 'validateConfirmPassword',
        })
        return
      }

      if (
        error ||
        errorPassword ||
        (isSignUp && errorUser) ||
        (isSignUp && errorConfirmPassword) ||
        errorText
      ) {
        this.goBack()
      }
    } catch (e) {
      this.setState({
        isLoading: false,
      })
    }
  }

  switchScreen = event => {
    event.preventDefault()
    this.setState(preState => {
      return {
        isSignUp: !preState.isSignUp,
        errorText: '',
        email: '',
        password: '',
        userName: '',
        confirmPassword: '',
        errorPassword: undefined,
        errorEmail: undefined,
        errorUser: undefined,
        errorConfirmPassword: undefined,
        errorPhone: undefined,
      }
    })
  }

  /**
   * Select tab for sign in
   */
  onSelectTab = value => {
    this.setState({
      isEmail: value,
      errorText: '',
    })
  }
  onGoBack=()=>{
    // history.push('/checkout')
    return
  }

  render() {
    const { classes } = this.props
    const {
      email,
      password,
      userName,
      errorEmail,
      errorPassword,
      errorText,
      isSignUp,
      errorUser,
      confirmPassword,
      errorConfirmPassword,
      isEmail,
      phone,
      errorPhone,
      regionSelected,
    } = this.state

    const formClasses = classnames('form-view', classes.formView)
    return (
      <div className={classes.wrapper} style={{ backgroundImage: `url(${bgImage})` }}>
        <form onSubmit={this.onSubmitForm} className={formClasses} autoComplete="off">
          <a
            href="#"
            onClick={this.onGoBack}
            style={{ position: 'absolute', right: '15px', top: '15px' }}
          >
            <img alt="close" src={closeIcon} style={{ width: '20px', height: '20px' }} />
          </a>
          <div className={classes.viewOverlay}>
            <span className="login-label">
              {!isSignUp ? `Đăng ký` : `Đăng nhập`}
            </span>
          </div> 
          <HeaderSelect
            isEmail={isEmail}
            onSelectTab={this.onSelectTab}
          />
              {!isEmail ? (
                <InputPhone
                  errorPhone={errorPhone}
                  onChangePhoneNumber={this.onChangePhoneNumber}
                  phoneNumber={phone}
                  region={regionSelected}
                />
              ) : (
                <TextField
                  error={!!errorEmail}
                  helperText={errorEmail && `Vui lòng nhập đúng định dạng email`}
                  className={classes.input}
                  value={email}
                  id="outlined-search"
                  label='Địa chỉ email'
                  variant="outlined"
                  name="email"
                  onChange={this.onChangeFormData}
                  onKeyPress={this.handlePressKey}
                  inputProps={{
                    autoComplete: 'new-password',
                    form: {
                      autoComplete: 'off',
                    },
                  }}
                />
              )}

              {isSignUp && (
                <TextField
                  error={!!errorUser}
                  helperText={errorUser && `Tên của bạn không được vượt quá 150 kí tự`}
                  className={classes.input}
                  value={userName}
                  id="outlined-search"
                  label='Tên người dùng'
                  variant="outlined"
                  name="userName"
                  onChange={this.onChangeFormData}
                  onKeyPress={this.handlePressKey}
                  inputProps={{
                    autoComplete: 'new-password',
                    form: {
                      autoComplete: 'off',
                    },
                  }}
                />
              )}

              <TextField
                onKeyPress={this.handlePressKey}
                error={!!errorPassword}
                helperText={errorPassword && `Vui lòng nhập mật khẩu đúng định dạng từ 8-25 kí tự`}
                className={classes.input}
                value={password}
                id="outlined-search"
                label='Mật khẩu'
                type="password"
                name="password"
                variant="outlined"
                onChange={this.onChangeFormData}
                autoComplete="off"
              />
              {isSignUp && (
                <TextField
                  onKeyPress={this.handlePressKey}
                  error={!!errorConfirmPassword}
                  helperText={errorConfirmPassword && `Vui lòng nhập mật khẩu đúng định dạng từ 8-25 kí tự`}
                  className={classes.input}
                  value={confirmPassword}
                  id="outlined-search"
                  label='Xác nhận mật khẩu'
                  type="password"
                  name="confirmPassword"
                  variant="outlined"
                  onChange={this.onChangeFormData}
                  autoComplete="off"
                />
              )}

          {errorText && (
            <p className={classes.errorText} style={{ marginTop: 0 }}>
              {errorText}
            </p>
          )}

          <Button
            id="recaptcha-container"
            variant="contained"
            color="primary"
            className="btn-submit-login"
            onClick={this.onSubmitForm}
            style={{ backgroundColor: '#F7941D', height: '40px' }}
          >
            Confirm
          </Button>
          {(
            <>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <span className="label-account">
                  {!isSignUp ? `Bạn chưa có tài khoản?` : `Bạn đã có tài khoản?`}
                </span>
                <a href="#" className="btn-switch" onClick={this.switchScreen}>
                  {!isSignUp ? `Sign up` : `Sign in`}
                </a>
              </div>
            </>
          )}
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  history: PropTypes.any,
  classes: PropTypes.any,
  location: PropTypes.any,
}

const mapStateToProps = () => {}

export default connect(mapStateToProps)(withStyles(styles)(Login))
