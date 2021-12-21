import React, { FC, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'

type propsType = {
  value: string
  setValue: any
  items: { label: string; value: string }[]
  label: string
  hasInput?: true | false
}

export const Filter: FC<propsType> = ({ value, setValue, items, label, hasInput = true }) => {
  const [search, setSearch] = useState<string | undefined>()

  const currentItemName = items.find((item) => item.value === value)
  items = search ? items.filter((item) => item.label.toLowerCase().includes(search.toLowerCase())) : items
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="dark" size="sm">
          {`${label}: ${currentItemName?.label}`}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {hasInput && (
            <div className="input-container">
              <Form.Control placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          )}
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
