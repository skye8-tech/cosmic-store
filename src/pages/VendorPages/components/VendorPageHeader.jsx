import Button from '@components/Button';
import React from 'react'

function VendorPageHeader(props) {
    const {title,buttonText,buttonIcon}=props
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">{title}</h1>
        <Button
          text={buttonText}
          variant="primary"
          icon={
           buttonIcon
          }
        />
      </div>
    </>
  );
}

export default VendorPageHeader
