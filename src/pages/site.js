import React from "react"
import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function Site() {
    if (typeof window !== 'undefined') {
          window.location.pathname = '/site/index.html';
      }
    return null;

}

