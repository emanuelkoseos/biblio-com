// index.js code
import React from "react"
import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function Home() {
    useEffect(() => {
        navigate('site');
      }, []);
    return <div>
            <h3>loading...please wait.</h3>
            </div>
}