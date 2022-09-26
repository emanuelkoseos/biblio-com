// index.js code
import React from "react"
import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function Home() {
    useEffect(() => {
        navigate('site');
      }, []);
    return <div>
            <h1>default</h1>
            <script src="redirect.js"></script>
            </div>
}