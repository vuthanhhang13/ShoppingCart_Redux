import React from 'react'

function Filter(props) {
  return (
    <div className='filter'>
      <div className='filter-color'>Cost {'  '}
        <select onChange={props.sortCostFilter} value={props.cost}>
          <option value="">Latest</option>
          <option value="highest">highest</option>
          <option value="lowest">lowest</option>
        </select>
      </div>
      <div className='filter-size'>Size {'  '}
        <select  onChange={props.sizeFilter}  value={props.size}>
          <option value="">All</option>
          <option value="sm">sm</option>
          <option value="s">s</option>
          <option value="m">m</option>
          <option value="l">l</option>
          <option value="xl">xl</option>
          <option value="xxl">xxl</option>
          <option value="xxxl">xxxl</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
