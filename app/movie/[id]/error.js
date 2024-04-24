"use client"
import React from 'react'
import Loading from "@/components/loading"
function Error() {
  return (
    <div
    style={{
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    <h1>we could find the movie ypu looking for!</h1>
    <Link
      href="/"
      style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
    >
      Go Home
    </Link>
  </div>
  )
}

export default Error;