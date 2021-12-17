import React, { FC, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'

type propsType = {
  value: string
  setValue: any
  items: { label: string; value: string }[]
  label: string
  hasInput: true | false
}

export const Filter: FC<propsType> = ({ value, setValue, items, label, hasInput }) => {
  const [search, setSearch] = useState<any>()

  items = search ? items.filter((item) => item.label.toLowerCase().includes(search.toLowerCase())) : items

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="outline-dark" size="sm">
          {`${label}: ${value}`}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {hasInput && <Form.Control placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />}
          {items.map((item, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => {
                setValue(item.value)
              }}
            >
              {item.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
