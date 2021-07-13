/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import './CSS/styles.css'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import styles from './CSS/loginStyle.js'

class InputPhone extends Component {
  constructor(props) {
    super(props)
    const { phoneNumber, region } = props

    const phone = phoneNumber ? phoneNumber.replace(region.dial_code, '') : ''
    this.state = {
      phoneNumber: phone || '',
      regionSelected: { name: 'Viet Nam', dial_code: '+84', code: 'VN' },
      isOpenRegion: false,
    }
  }

  onOpenRegion = event => {
    event.preventDefault()
  }

  onHideRegion = () => {
    this.setState({
      isOpenRegion: false,
    })
  }

  onSelectRegion = item => {
    const { phoneNumber } = this.state
    const { onChangePhoneNumber } = this.props
    this.setState({
      regionSelected: item,
    })
    if (typeof onChangePhoneNumber === 'function') {
      onChangePhoneNumber(`${item.dial_code}${phoneNumber}`, item)
    }
  }

  onChangePhoneNumber = event => {
    const { value } = event.target
    const { onChangePhoneNumber } = this.props
    const { regionSelected } = this.state
    const currentValue = value.replace(/[\D]/g, '')

    this.setState(
      {
        phoneNumber: currentValue,
      },
      () => {
        if (typeof onChangePhoneNumber === 'function') {
          onChangePhoneNumber(`${currentValue}`, regionSelected)
        }
      }
    )
  }

  render() {
    const { classes, language, errorPhone } = this.props
    const { phoneNumber, regionSelected, isOpenRegion } = this.state
    return (
      <div className={classes.container}>
        <Grid container>
          <Grid item xs={3} md={3}>
            <a
              href="#"
              className={`${classes.inputRegion} input-region`}
              onClick={this.onOpenRegion}
            >
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{regionSelected.code}</span>
              <span style={{ fontSize: '14px', marginLeft: '5px' }}>
                {regionSelected.dial_code}
              </span>
            </a>
          </Grid>
          <Grid item xs={9} md={9}>
            <TextField
              error={!!errorPhone}
              // helperText={errorPhone && language.t(errorPhone)}
              style={{ width: '100%' }}
              value={phoneNumber}
              id="outlined-search"
              label='Phone'
              variant="outlined"
              name="phone"
              inputProps={{
                autoComplete: 'new-password',
                form: {
                  autoComplete: 'off',
                },
              }}
              onChange={this.onChangePhoneNumber}
            />
          </Grid>
        </Grid>
        {errorPhone && (
          <span className={classes.errorText} style={{ marginTop: 0 }}>
            Hãy nhập đủ 10 số
          </span>
        )}
      </div>
    )
  }
}

InputPhone.propTypes = {
  classes: PropTypes.any,
  language: PropTypes.any,
  errorPhone: PropTypes.string,
  onChangePhoneNumber: PropTypes.any,
  phoneNumber: PropTypes.any,
  region: PropTypes.object,
}
export default withStyles(styles)(InputPhone)
