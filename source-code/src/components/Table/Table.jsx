// import React, { Component } from 'react';
import { BaseTable, THead, Td, Th, Tr, Text } from 'components';
import { MdDelete } from 'react-icons/md';

const tableHeaders = ['№', 'name', 'age', 'status', 'option'];

export function Table({ contacts = [], onDelete }) {
  return (
    <>
      <>
        {contacts.length > 0 ? (
          <BaseTable>
            <THead>
              <tr>
                {tableHeaders.map((item, index) => (
                  <Th key={index}>{item}</Th>
                ))}
              </tr>
            </THead>

            <tbody>
              {contacts.map(({ name, age, status }, index) => (
                <Tr key={name}>
                  <Td>{index + 1}</Td>
                  <Td>{name}</Td>
                  <Td>{age}</Td>
                  <Td>{status === 'yes' ? 'online' : 'offline'}</Td>
                  <Td>
                    <button type="button" onClick={() => onDelete(name)}>
                      <MdDelete size="20px" />
                    </button>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </BaseTable>
        ) : (
          <Text textAlign="center">{'No contacts 😭'}</Text>
        )}
      </>
    </>
  );
}
