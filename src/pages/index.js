// index.js code
import React from "react"
import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function Home() {
  if (typeof window !== 'undefined') {
        window.location.href = 'site/index.html';
    }
    return <div>
    <h3>loading...please wait.</h3>
    </div>
}

