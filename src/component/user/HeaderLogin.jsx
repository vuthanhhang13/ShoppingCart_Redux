/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HeaderSelect extends Component {
  constructor(props) {
    super(props)
    const { isEmail } = props
    this.state = {
      isEmail,
    }
  }

  onSelectTab = value => {
    const { onSelectTab } = this.props
    this.setState(
      {
        isEmail: value,
      },
      () => {
        if (typeof onSelectTab === 'function') {
          onSelectTab(value)
        }
      }
    )
  }

  render() {
    const { isEmail } = this.state
    return (
      <div style={styles.container}>
        <a
          href="#"
          onClick={() => this.onSelectTab(false)}
          style={{ backgroundColor: !isEmail ? '#F7941D' : '#fff', ...styles.itemBtn,textDecoration: 'none' }}
        >
          <span style={{ color: !isEmail ? '#fff' : '#454F63' }}>Phone</span>
        </a>
        <a
          href="#"
          onClick={() => this.onSelectTab(true)}
          style={{ backgroundColor: isEmail ? '#F7941D' : '#fff', ...styles.itemBtn,textDecoration: 'none' }}
        >
          <span style={{ color: isEmail ? '#fff' : '#454F63' }}>Email</span>
          </a>
      </div>
    )
  }
}

HeaderSelect.propTypes = {
  onSelectTab: PropTypes.func,
  language: PropTypes.any,
  isEmail: PropTypes.bool,
}

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  itemBtn: {
    padding: '0px 20px',
    border: '1px solid #D1D3D4',
    borderRadius: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
  },
}

export default HeaderSelect
