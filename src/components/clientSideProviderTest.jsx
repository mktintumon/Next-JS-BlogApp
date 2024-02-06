"use client"

// use this component in layout.js by enclosing all component inside <ClientSideProviderTest> Tag

const ClientSideProviderTest = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default ClientSideProviderTest